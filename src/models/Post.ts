import mongoose from "mongoose";

const Schema = mongoose.Schema 

//post model
const PostModel = new Schema({
    author: {
        type: String
    },
    title: {    
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    picture: {
        type: String
    }
}, {timestamps: true})

// mongoose.model("posts", PostModel) 
var Post = mongoose.models.posts || mongoose.model("posts", PostModel) 

export default Post