import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import NextCors from 'nextjs-cors'

//mongoose connect
import dbConnect from "@/utils/database";
dbConnect()

// import "../../models/Post"

//create post - endpoint
export default async function createPost(req: NextApiRequest, res: NextApiResponse) {
    
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    var { author, title, content, picture } = req.body

    const Post = mongoose.model('posts')
    
    try {

        var response = await Post.create({
            title,
            author: "admin",
            content,
            picture
        })

        res.status(200).json({ success: true, message: "Post created", post: response})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal error", post: {} })
    }

}