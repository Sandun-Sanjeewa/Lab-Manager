import Lab from "../models/labModel.js";
import User from "../models/userModel.js";

export const createLab = async (data) => {
    const { labname, location, assistant } = data;

    if (!labname || !location || !assistant) {
        throw new Error("All fields are required");
    }

    const trimmedName = labname.trim().replace(/\s+/g, "");
    const trimmedLocation = location.trim();
    

    const existing = await Lab.findOne({ labname: new RegExp(`^${trimmedName}$`, 'i') });
    if (existing) {
        throw new Error("Lab name already exists");
    }

    const assistantUser = await User.findById(assistant);
    if (!assistantUser || assistantUser.role !== "assistant") {
        throw new Error('Assigned user must have the role "assistant"');
    }

    const lab = new Lab({
        labname: trimmedName,
        location: trimmedLocation,
        assistant
    });

    return await lab.save();
};

export const getAllLabs = async () => {
    const labs = await Lab.find().populate("assistant", "name email");
    return labs;

};

export const getLab = async (labId) => {
    const lab = await Lab.findById(labId);
    return lab;
};


export const updateLab = async (labId, updateData) => {
    const { labname, location } = updateData;
    if (!labname || !location) {
        throw new Error("Name and Location are required");
    }
    const trimmedName = labname.trim();

    const existing = await Lab.findOne({
        _id: { $ne: labId },
        labname: new RegExp(`^${trimmedName}$`, 'i')
    });

    if (existing) {
        throw new Error("Lab name already exists");
    }

    const lab = await Lab.findByIdAndUpdate(
        labId,
        updateData,
        { new: true, runValidators: true }
    );
    if (!lab) {
        throw new Error("Lab not found");
    }
    return lab;
};

export const deleteLab = async (labId) => {
    const lab = await Lab.findByIdAndDelete(labId);
    if (!lab) {
        throw new Error("Lab not found");
    }

    return {
        message: "Lab deleted successfully",
        id: lab._id,
        labname: lab.labname,
        location: lab.location,
        assistant: lab.assistant
    };
};


