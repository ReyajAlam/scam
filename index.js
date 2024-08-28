// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'

import mongoose from "mongoose";
// import { DB_NAME } from "./constants"
import constants from './constants.js';

import conectDB from "./db/index.js";
 /*dotenv.config({
    path: './env'
})

conectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port :${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db Connection Failed", err);
})  */





















 import express from "express"
 const app = express()

( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is LIstening on ${process.env.PORT}`)
        })
    }
    catch (error){
            console.error("ERROR: ",error)
            throw error
    }
})()