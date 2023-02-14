import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { compareSync } from "bcryptjs"
import { sign } from 'jsonwebtoken'

//user model
// import '../../models/User'

//login admin - endpoint
export default async function login(req: NextApiRequest, res: NextApiResponse){

    var { username, password } = req.body
    
    var User = mongoose.model('users')

    try {

        let response = await User.findOne({username: username}).exec()

        if(!response){
            return res.status(401).json({message: "User not found", auth: false})
        }

        let isValid = compareSync(password, response.password) 

        if(!isValid){
            return res.status(401).json({message: "Invalid password", auth: false})
        }

        let id = response._id

        let token = sign({id}, process.env.SECRET_TOKEN as string, {
            expiresIn: 300 * 12
        })        

        res.status(200).json({message: "Success", auth: true, user: {username, token, auth: true}})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal error", auth: false})
    }

}