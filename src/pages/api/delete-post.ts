import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//mongoose connect instance
import dbConnect from "@/utils/database";

//post model
import Post from "@/models/Post";

//delete post - endpoint
async function deletePost(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    var { postId } = req.query;

    try {
        var response = await Post.deleteOne({ _id: postId }).exec();

        if (response) {
            return res.status(200).json({ success: true, post: response, message: "Success" });
        };

        res.status(204).json({ success: false, message: "Post not found", post: {} });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal error", post: {} });
    };

};

export default middleware(deletePost);