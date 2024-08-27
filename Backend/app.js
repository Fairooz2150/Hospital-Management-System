import express from "express";
import { config } from "dotenv";
import cors from "cors"
const app = express();
config({path: "./config/config.env"})

app.use(cors(
    { origin: [process.env.FRONTEND_URL, process.env.DASHBOAR_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
    }
))

export default app;