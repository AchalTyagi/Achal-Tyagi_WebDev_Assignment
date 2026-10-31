
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect item routes
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend API is running successfully!"
    });
});

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
