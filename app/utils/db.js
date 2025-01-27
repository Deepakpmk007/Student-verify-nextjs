import mongoose from "mongoose";

const MONGO_URI = process.env.DATABASE;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI in your .env.local file");
}

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};
