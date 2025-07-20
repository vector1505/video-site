import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB host: ${connectionInstance.connection.host}`); //connectionInstance is an object
    } catch (error) {
        console.log("MONGODB connection error: ",error);
        process.exit(1)
    }
}

export default connectDB