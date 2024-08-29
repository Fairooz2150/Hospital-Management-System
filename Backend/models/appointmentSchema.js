import mongoose, { Mongoose } from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[3, "First Name must contain atleast 3 characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength:[3, "Last Name must contain atleast 3 characters!"]
    },
    email:{
        type: String,
        required: true,
        validate : [validator.isEmail, "Please provide a valid Email!"]
    },
    phone:{
        type: String,
        required: true,
        maxLength:[10, "Phone number must contain exact 10 digits!"],
        minLength:[10, "Phone number must contain exact 10 digits!"]
    },
    aadhar:{
        type: String,
        required: true,
        maxLength:[12, "Aadhar number must contain exact 12 digits!"],
        minLength:[12, "Aadhar number must contain exact 12 digits!"]
    },
    dob:{
        type: Date,
        required: [true, "Date of Birth is required!"]
    },
    gender:{
        type: String,
        required : true,
        enum: ["Male", "Female", "Others"]
    },
    appointment_date:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    doctor:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        }
    },
    hasVisited:{
        type: Boolean,
        default: false
    },
    doctorId:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    patientId:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending"
    }
})

export const Appointment = mongoose.model("Appointment", appointmentSchema);
