import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import NextCors from 'nextjs-cors'

//mongoose connect
import dbConnect from "@/utils/database";
dbConnect()

import "../../models/Comment"

//create post's comment - endpoint
export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
    
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    var { postId, comment, name, email, website } = req.body
    
    var Comment = mongoose.model('comments')

    try {

        var response = await Comment.create({
            postId,
            comment, 
            name, 
            email,
            website
        })

        res.status(200).json({ success: true, message: "comment created", comment: response})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal error", comment: {} })
    }

}