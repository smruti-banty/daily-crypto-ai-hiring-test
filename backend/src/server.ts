import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.use("/hello", (_req, res) => {
    res.send("Hello World");
});

console.log("process.env", process.env.MONGODB_URI)
// Database connection
mongoose
    .connect(process.env.MONGODB_URI!)
    .then(() => {
        console.log('Connected to MongoDB');
        const port = process.env.PORT || 5001;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });