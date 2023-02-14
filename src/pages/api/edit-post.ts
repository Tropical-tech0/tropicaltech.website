import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//mongoose connect instance
import dbConnect from "@/utils/database";
dbConnect()

//edit post - endpoint
export default async function editPost(req: NextApiRequest, res: NextApiResponse){

    var { postId, title, content, picture } = req.body
    let Post = mongoose.model('posts')

    try {
        
        let post = await Post.findOne({_id: postId}).exec()

        if(!post){
            res.status(204).json({success: false, message: "Post not found", post: {}})
        }

        if(title){
            post.title = title
        }
        if(content){
            post.content = content
        }
        if(picture){
            post.picture = picture
        }

        let response = await post.save()

        if(response){
            return res.status(200).json({success: true, post: response, message: "Success"})
        }

        res.status(204).json({success: false, message: "Error on the edition", post: {}})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Internal error", post: {}}) 
    }

}