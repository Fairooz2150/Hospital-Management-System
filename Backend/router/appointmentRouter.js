import express from "express"
import { postAppointment } from "../controller/appointmentController.js";
import { isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/post",isPatientAuthenticated, postAppointment)

export default router;
