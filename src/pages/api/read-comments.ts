import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//mongoose connect
import dbConnect from "@/utils/database";

//comment model
import Comment from "@/models/Comment";

//read comments by post id - endpoint
async function readComments(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    var { postId } = req.query;

    try {
        var response = await Comment.find({postId}).exec();
        res.status(200).json({ success: true, comments: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, comments: [] });
    };

};

export default middleware(readComments);