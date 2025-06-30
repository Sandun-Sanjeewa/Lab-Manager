import express from "express";
import { deleteUser, getAllUsers, getUser, loginUser, signupUser, updateUser, updateUserrole } from "../controllers/userController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

userRouter.post("/signup",signupUser);
userRouter.post("/login", loginUser);
userRouter.get("/getallusers",getAllUsers);
userRouter.get("/getuser/:id", getUser);
userRouter.put("/updateuser/:id",updateUser);
userRouter.delete("/deleteuser/:id",protect,isAdmin,deleteUser);
userRouter.patch("/updateuserrole/:id/role",updateUserrole);


export default userRouter;

