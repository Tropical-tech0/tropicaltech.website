import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//mongoose connect
import dbConnect from "@/utils/database";
dbConnect()

//create post - endpoint
export default async function createPost(req: NextApiRequest, res: NextApiResponse) {
    
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