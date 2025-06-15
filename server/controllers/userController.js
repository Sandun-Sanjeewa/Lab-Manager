import * as authservices from "../services/userServices.js";
export const signupUser = async (req, res) => {
    try {
        const user = await authservices.signupUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

