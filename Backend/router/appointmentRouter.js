import express from "express"
import { getAllAppointments, postAppointment } from "../controller/appointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/post",isPatientAuthenticated, postAppointment)
router.get("/getall",isAdminAuthenticated, getAllAppointments)

export default router;
