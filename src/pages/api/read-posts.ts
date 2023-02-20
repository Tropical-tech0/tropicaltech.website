import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//mongoose connect
import dbConnect from "@/utils/database";

//post model
import Post from "@/models/Post";

//read all posts - endpoint
async function readPosts(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    try {
        // var response = await Post.find().exec();
        var response = await Post.find({}).exec();
        res.status(200).json({ success: true, posts: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, posts: [] });
    };

};

export default middleware(readPosts);