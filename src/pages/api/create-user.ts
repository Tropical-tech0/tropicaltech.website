import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { genSaltSync, hashSync } from "bcryptjs"
import NextCors from 'nextjs-cors';

//import db
import dbConnect from "@/utils/database";

//user model
import User from "@/models/User";

//created user admin - endpoint
export default async function createAdmin(req: NextApiRequest, res: NextApiResponse){

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    await dbConnect()

    var { username, password } = req.body

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