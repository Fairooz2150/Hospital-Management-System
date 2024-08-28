import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import { User } from "../models/userSchema.js"
import { generateToken } from "../utils/jwtToken.js"

export const patientRegister = catchAsyncErrors(async(req,res,next)=>{
    const {firstName, lastName, email, phone, password, gender, aadhar, dob, role} = req.body
    if(!firstName || !lastName || !email || !phone || !password || !gender || !aadhar || !dob || !role){
        return next(new ErrorHandler("Please Fill Full Form!", 400))
    }

    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("User Already Registered!", 400))
    }

    user = await User.create({firstName, lastName, email, phone, password, gender, dob, aadhar, role })
    generateToken(user, "User Registered", 200, res );
})


export const login = catchAsyncErrors(async (req,res,next)=>{
    const {email, password, confirmPassword, role } = req.body;
    if(!email || !password || !confirmPassword || !role ){
        return next(new ErrorHandler("Please provide all details!", 400))
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Password and Confirm Password Do not Match!", 400))
    }

    const user = await User.findOne({email}).select("+password");
    
    if(!user){
        return next(new ErrorHandler("Invalid Password or Email!", 400))
    }

    const isPasswordMatched = await user.comparePassword(password)
    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password or Email!", 400))
    }

    if(role !== user.role){
        return next(new ErrorHandler("User with this role not found!", 400))
    }
    generateToken(user, "User Login Successfully", 200, res );

})