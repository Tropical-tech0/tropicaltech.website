import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//mongoose connect
import dbConnect from "@/utils/database";

//comment model
import Comment from "@/models/Comment";

//create post's comment - endpoint
async function createComment(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    var { postId, comment, name, email, website } = req.body;

    try {

        var response = await Comment.create({
            postId,
            comment,
            name,
            email,
            website
        });

        res.status(200).json({ success: true, message: "comment created", comment: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal error", comment: {} });
    };

}

export default middleware(createComment);