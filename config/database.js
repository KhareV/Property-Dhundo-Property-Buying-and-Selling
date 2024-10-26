import mongoose from "mongoose";
let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true); //fields specified to schema will be saved to the database
  //If the database is already connected, then dont connect again
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
export default connectDB;
