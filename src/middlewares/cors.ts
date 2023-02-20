import NextCors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from 'next';

//middleware - cors policy
const middleware = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    handler(req, res)
}

export default middleware