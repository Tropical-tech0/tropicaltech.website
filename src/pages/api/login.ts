import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { compareSync } from "bcryptjs"
import { sign } from 'jsonwebtoken'
import NextCors from 'nextjs-cors'

//db
import dbConnect from "@/utils/database";

//user model
import User from "@/models/User";

//login admin - endpoint
export default async function login(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    await dbConnect()

    var { username, password } = req.body

    try {

        let response = await User.findOne({ username: username }).exec()

        if (!response) {
            return res.status(401).json({ message: "User not found", auth: false })
        }

        let isValid = compareSync(password, response.password)

        if (!isValid) {
            return res.status(401).json({ message: "Invalid password", auth: false })
        }

        let id = response._id

        let token = sign({ id }, process.env.SECRET_TOKEN as string, {
            expiresIn: 300 * 12
        })

        res.status(200).json({ message: "Success", auth: true, user: { username, token, auth: true } })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal error", auth: false })
    }

}