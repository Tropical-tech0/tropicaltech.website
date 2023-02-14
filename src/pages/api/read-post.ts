import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//mongoose connect instance
import dbConnect from "@/utils/database";
dbConnect()

//read post - endpoint
export default async function readPost(req: NextApiRequest, res: NextApiResponse){

    var { postId } = req.query
    let Post = mongoose.model('posts')

    try {
        var response = await Post.findOne({_id: postId}).exec()

        if(response){
            res.status(200).json({success: true, post: response, message: "Success"})
        }

        res.status(204).json({success: false, message: "Post not found", post: {}})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Internal error", post: {}}) 
    }

}