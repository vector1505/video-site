//require('dotenv').config({path: './env'})
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

const app = express();
connectDB()
.then(()=>{
    app.on("error",(error) => {
        console.log("You got error!!");
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed!"+error);
})


/*
import express from "express";
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error:",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port: ${process.env.PORT}`)
        })

    } catch(error){
        console.error("Error: ",error)
        throw err
    }
})()
*/