import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import NextCors from 'nextjs-cors'

//mongoose connect
import dbConnect from "@/utils/database";

//comment model
import Comment from "@/models/Comment";

//read comments by post id - endpoint
export default async function readComments(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    await dbConnect()

    var { postId } = req.query

    try {
        var response = await Comment.find({postId}).exec()
        res.status(200).json({ success: true, comments: response })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, comments: [] })
    }

}