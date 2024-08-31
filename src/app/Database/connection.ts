import mongoose from "mongoose";

// const MONGO_URI="mongodb://127.0.0.1:27017/employe_management"

const connectMongo = async () => {
  const MONGO_URI: string | undefined = process.env.MONGODB_URI;
  if (!MONGO_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }
  try {
    mongoose.connect(MONGO_URI);
  } catch (errors) {
    return Promise.reject(errors);
  }
};
export default connectMongo;
