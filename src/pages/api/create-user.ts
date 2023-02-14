import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { genSaltSync, hashSync } from "bcryptjs"

//user model
import '../../models/User'

//created user admin - endpoint
export default async function createAdmin(req: NextApiRequest, res: NextApiResponse){

    var { username, password } = req.body
    
    var User = mongoose.model('users')

    let salt = genSaltSync(10)

    let newUser = new User({
        username,
        password: hashSync(password, salt)
    })

    try {

        let response = await newUser.save() 

        if(response){
            return res.status(200).json({success: true, message: "Created", response})
        }

    } catch (error) {
        res.status(500).json({message: "Internal error", success: false})
    }

}