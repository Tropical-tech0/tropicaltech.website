import mongoose from "mongoose";

const connection: { isConnected?: any } = {};

//connect to database
async function dbConnect() {

    if (connection.isConnected) {
        return;
    }

    const db: any = await mongoose.connect(process.env.MONGO_URI as string, {
        useNewUrlParser: true
    } as any)

    connection.isConnected = db.connections[0].readyState

}

export default dbConnect