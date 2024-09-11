import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://karlisakar1234:somesh225@cluster0.wlkw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("DB connected"))
} 

