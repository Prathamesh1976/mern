import mongoose from "mongoose";

const MONGO_CREDENTIALS = {
    username: "prathameshjadhav486",
    password: "ezExpMcSfu1wILGA",
    cluster: "cluster0.nkncx.mongodb.net",
    dbName: "prathamesh"
};

// Construct MongoDB URI dynamically
const MONGO_URI = `mongodb+srv://${MONGO_CREDENTIALS.username}:${MONGO_CREDENTIALS.password}@${MONGO_CREDENTIALS.cluster}/${MONGO_CREDENTIALS.dbName}`;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};
