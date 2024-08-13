import mongoose from "mongoose";
import "dotenv/config";

export default async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/azman";

  if (mongoUri === "error") {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log(`${new Date().toDateString()}
        connected to database`);
  } catch (error) {
    throw new Error(`Error connecting to mongodb ${error}`);
  }
}
