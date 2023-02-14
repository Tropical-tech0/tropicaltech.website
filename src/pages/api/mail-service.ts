import { NextApiRequest, NextApiResponse } from "next";
import mailer from 'nodemailer'
import HtmlMail from "@/components/htmlMail";
import NextCors from 'nextjs-cors'

//smtp config
import configSMTP from '../../services/smtpConfig'

interface DataMail {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    price: string,
    description: string
}

//endpoint - mail service
export default async function mailService(req: NextApiRequest, res: NextApiResponse){

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    var { body }: {body: DataMail} = req

    //transporter mail service
    const smtp = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: configSMTP.user,
            pass: configSMTP.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mail = {
        from: body.email,
        to: configSMTP.user,
        subject: `E-mail enviado por ${body.firstName}`,
        html: HtmlMail(body)
    }

    try {
        var response: any = await smtp.sendMail(mail)
        res.json(response)
        smtp.close()
    } catch (error) {
        res.json(error)
        smtp.close()
        console.log(error)
    }

}