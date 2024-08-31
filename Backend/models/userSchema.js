import mongoose from "mongoose"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[3, "First Name must contain atleast 3 characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength:[2, "Last Name must contain atleast 2 characters!"]
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
    password:{
        type: String,
        required:true,
        minLength: [8, "Password must contain atleat 8 characters!"],
        select: false
    },
    role:{
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"]
    },
    doctrDptmnt:{
        type: String
    },
    doctrAvatar:{
        public_id: String,
        url: String
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
         expiresIn: process.env.JWT_EXPIRES,
        })
}

export const User = mongoose.model("User",userSchema)