import mongoose from "mongoose";

const Schema = mongoose.Schema 

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

var Comment = mongoose.models.comments || mongoose.model('comments', CommentModel)

export default Comment