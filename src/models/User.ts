import mongoose from 'mongoose'

const Schema = mongoose.Schema

let UserModel = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

var User = mongoose.models.users || mongoose.model('users', UserModel)

export default User