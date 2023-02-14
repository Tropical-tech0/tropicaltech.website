import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//mongoose connect
import dbConnect from "@/utils/database";
dbConnect()

import "../../models/Comment"

//create post's comment - endpoint
export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
    
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