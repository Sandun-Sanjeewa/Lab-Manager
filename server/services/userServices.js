import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";



export const signupUser = async(data)=>{
    const {name,email,password,role}= data;
    if(!name || !email || !password ||!role){
        throw new Error("all fields are required");
    }
    const existing = await User.findOne({email});
    if(existing){
        throw new Error("Email is already exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({name,email,password:hashedPassword,role});
    const token = generateToken(user);
    return{
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        },
    };
};