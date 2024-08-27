import express from "express";
import { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();


config({path: "./config/config.env"})

app.use(cors(
    { origin: [process.env.FRONTEND_URL, process.env.DASHBOAR_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
    }
))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: '/tmp/'
}))

export default app;