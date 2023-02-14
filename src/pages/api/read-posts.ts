import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import NextCors from 'nextjs-cors'

//mongoose connect
import dbConnect from "@/utils/database";

//post model
import Post from "@/models/Post";

//read all posts - endpoint
export default async function readPosts(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    await dbConnect()

    try {
        // var response = await Post.find().exec()
        var response = await Post.find({}).exec()
        res.status(200).json({ success: true, posts: response })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, posts: [] })
    }

}