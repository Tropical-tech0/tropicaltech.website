import mongoose from "mongoose";
import dbConnect from "@/utils/database";

const Schema = mongoose.Schema 
dbConnect()

//comment model
const CommentModel = new Schema({
    comment: {
        type: String
    },
    name: {    
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    postId: {
        type: String
    }
}, {timestamps: true})

mongoose.model('comments', CommentModel)