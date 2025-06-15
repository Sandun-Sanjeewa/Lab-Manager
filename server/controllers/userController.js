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

