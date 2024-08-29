import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import {Appointment} from "../models/appointmentSchema.js"
import {User} from "../models/userSchema.js"

export const postAppointment = catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        aadhar,
        dob,
        gender,
        appointment_date,
        department,
        doctor_firstName,
        doctor_lastName,
        hasVisited,
        address
    } = req.body

    if(!firstName ||
       ! lastName ||
       ! email ||
       ! phone ||
       ! aadhar ||
       ! dob ||
       ! gender ||
       ! appointment_date ||
       ! department ||
       ! doctor_firstName ||
       ! doctor_lastName ||
       ! hasVisited ||
       ! address)
       {
        return next (new ErrorHandler("Please Fill Full Form!", 400))
       }

       const isConflict = await User.find({
        firstName: doctor_firstName,
        lastName: doctor_lastName.Appointment,
        role: "Doctor",
        doctrDptmnt: department
       })

       if(isConflict.length === 0){
        return next (new ErrorHandler("Doctor not found!", 404))
       }

       if(isConflict.length > 1){
        return next (new ErrorHandler("Doctors conflict! Please contact through email or phone.", 404))
       }
})