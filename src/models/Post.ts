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
    content: {
        type: String
    },
    picture: {
        type: String
    }
}, {timestamps: true})

// mongoose.model("posts", PostModel) 
var Post = mongoose.model("posts", PostModel) 

export default mongoose.models.posts || Post