import * as userServices from "../services/userServices.js";
export const signupUser = async (req, res) => {
    try {
        const user = await userServices.signupUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const loginUser = async(req,res)=>{
    try {
        const user = await userServices.loginUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getAllUsers = async(req,res)=>{
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


export const getUser = async(req,res)=>{
    try {
        const user = await userServices.getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const updateUser = async(req,res)=>{
    try {
        const updateUser = await userServices.updateUser(req.params.id, req.body);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const updateUserrole = async(req,res)=>{
    try {
        const {role} = req.body;
        const {id}= req.params;
        if(!role){
            return res.status(400).json({error:"Role is required"});
        }
        const updateUser = await userServices.updateUserrole(id,role);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const deleteUser = async(req,res)=>{
    try {
        const deleteUser = await userServices.deleteUser(req.params.id);
        res.status(200).json(deleteUser);
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};


