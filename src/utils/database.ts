import mongoose from "mongoose";

const connection: {isConnected?: any} = {};

//connect to database
async function dbConnect(){

    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect("mongodb+srv://clodaski:prime123@cluster0.wvtey.mongodb.net/?retryWrites=true&w=majority" as string)
    
    connection.isConnected = db.connections[0].readyState

}

export default dbConnect