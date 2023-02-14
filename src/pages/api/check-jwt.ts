import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

//verify token jwt admin - endpoint
export default async function checkJWT(req: NextApiRequest, res: NextApiResponse){

    var { tokenaccess } = req.query

    if(!tokenaccess || tokenaccess == null){
        return res.status(401).json({auth: false, message: 'token expired!'})
    }

    try{
        jwt.verify(tokenaccess as any, process.env.SECRET_TOKEN as string, (err: any, decoded: any) => {
            if(err) return res.status(401).json({auth: false, error: 'token expired!'})
            
            res.status(200).json({auth: true, token: tokenaccess})
        })
    }catch(error){
        res.status(500).json({auth: false, message: 'token error in verify!'})
    }

}