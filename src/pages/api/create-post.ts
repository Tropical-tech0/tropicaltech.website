import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//mongoose connect
import dbConnect from "@/utils/database";

// import "../../models/Post"
import Post from "@/models/Post";

//create post - endpoint
async function createPost(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    var { author, description, title, content, picture } = req.body;
    
    try {

        var response = await Post.create({
            title,
            author: "admin",
            content,
            picture,
            description
        });

        res.status(200).json({ success: true, message: "Post created", post: response});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal error", post: {} });
    };

}

export default middleware(createPost);