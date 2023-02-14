import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//mongoose connect
import dbConnect from "@/utils/database";
dbConnect()

//read all posts - endpoint
export default async function readPosts(req: NextApiRequest, res: NextApiResponse){
   
    const model = mongoose.model('posts')
    
    try {
        // var response = await Post.find().exec()
        var response = await model.find().exec()
        res.status(200).json({success: true, posts: response})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, posts: []})
    }
    
}