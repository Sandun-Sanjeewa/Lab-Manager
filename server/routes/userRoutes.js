import express from "express";
import { getAllUsers, getUser, loginUser, signupUser, updateUser } from "../controllers/userController.js";



const userRouter = express.Router();

userRouter.post("/signup",signupUser);
userRouter.post("/login", loginUser);
userRouter.get("/getallusers",getAllUsers);
userRouter.get("/getuser/:id", getUser);
userRouter.put("/updateuser/:id",updateUser);

export default userRouter;

