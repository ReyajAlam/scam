  /* import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const conectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
        console.log(`\n MongoDB Connected !! DB Host: % ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB Connection Failed ",error);
        process.exit(1)
    }
}

export default conectDB  */

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { conectDB } from "/index.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`\n MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;
