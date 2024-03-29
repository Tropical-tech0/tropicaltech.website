import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//mongoose connect instance
import dbConnect from "@/utils/database";

//post model
import Post from "@/models/Post";

//edit post - endpoint
async function editPost(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    var { postId, title, content, picture } = req.body;

    try {

        let post = await Post.findOne({ _id: postId }).exec();

        if (!post) {
            return res.status(204).json({ success: false, message: "Post not found", post: {} });
        };

        if (title) {
            post.title = title;
        };
        if (content) {
            post.content = content;
        };
        if (picture) {
            post.picture = picture;
        };

        let response = await post.save();

        if (response) {
            return res.status(200).json({ success: true, post: response, message: "Success" });
        };

        res.status(204).json({ success: false, message: "Error on the edition", post: {} });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal error", post: {} });
    };

};

export default middleware(editPost);