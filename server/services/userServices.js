import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";



export const signupUser = async (data) => {
    const { name, email, password, role } = data;
    if (!name || !email || !password || !role) {
        throw new Error("All fields are required");
    }
    const existing = await User.findOne({ email });
    if (existing) {
        throw new Error("Email is already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    const token = generateToken(user);
    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },
    };
};

export const loginUser = async (data) => {
    const { email, password } = data;
    if (!email || !password) {
        throw new Error("All fields are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = generateToken(user);
    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },

    };
};

export const getAllUsers = async()=>{
    const users = await User.find().select("-password");
    return users;
};

export const getUser = async(userId)=>{
    const user = await User.findById(userId).select("-password");
    if(!user){
        throw new Error("User not found");
    }
    return user;

};

export const updateUser = async(userId,updateData)=>{

    if(updateData.password){
        updateData.password = await bcrypt.hash(updateData.password,10);
    }
    const user = await User.findByIdAndUpdate(
        userId,
        updateData,
        {new:true, runValidators: true}
    ).select("-password");
    if(!user){
        throw new Error("User not found");
    }

    return user;
};

export const deleteUser = async(userId)=>{
    const user = await User.findByIdAndDelete(userId);

    if(!user){
        throw new Error("User not found");
    }

    return{
        message: "user delete successfully",
        id:user._id,
        name:user._name,
        email:user.email
    };
};
