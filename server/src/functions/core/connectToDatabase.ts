import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`${new Date().toDateString()}
        connected to database`)
    } catch (error) {
        throw new Error(`Error connecting to mongodb ${error}`)
    }
}