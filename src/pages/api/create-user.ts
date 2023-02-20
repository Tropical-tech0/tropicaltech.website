import { NextApiRequest, NextApiResponse } from "next";
import { genSaltSync, hashSync } from "bcryptjs"
import mongoose from "mongoose";

//middleware - cors
import middleware from "@/middlewares/cors";

//import db
import dbConnect from "@/utils/database";

//user model
import User from "@/models/User";

//created user admin - endpoint
async function createAdmin(req: NextApiRequest, res: NextApiResponse){

    await dbConnect();

    var { username, password } = req.body;

    let salt = genSaltSync(10);

    let newUser = new User({
        username,
        password: hashSync(password, salt)
    });

    try {

        let response = await newUser.save();

        if(response){
            return res.status(200).json({success: true, message: "Created", response});
        };

        res.status(200).json({message: "Error", success: false});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal error", success: false});
    };

};

export default middleware(createAdmin);