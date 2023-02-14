import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { genSaltSync, hashSync } from "bcryptjs"
import NextCors from 'nextjs-cors';

//user model
// import '../../models/User'

//created user admin - endpoint
export default async function createAdmin(req: NextApiRequest, res: NextApiResponse){

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

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
        console.log(error)
        res.status(500).json({message: "Internal error", success: false})
    }

}