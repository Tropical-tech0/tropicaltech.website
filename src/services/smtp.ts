import nodemailer from 'nodemailer';
import { ReactNode } from 'react';

//config
import smtpConfig from './smtpConfig';

//transport system - send mail
const trasporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: false,
    auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

export interface MailOptions {
    from: string,
    to?: "ferreiraclovis523@gmail.com",
    html: ReactNode | HTMLElement | any
}

//send mail function
export const sendEmail = async (mailOptions: MailOptions) => {

    let response = await trasporter.sendMail(mailOptions)

    return response

}