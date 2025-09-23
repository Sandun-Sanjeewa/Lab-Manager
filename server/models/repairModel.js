import mongoose from "mongoose";

const equipmentRepairSchema = new mongoose.Schema({
    equipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipment",
        required: true,
    },
    issueDescription: {
        type: String,
        required: true,
        trim: true,
    },
    reportedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedTechnician: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    repairStatus: {
        type: String,
        enum: ["Pending", "In Progress", "Completed", "Unrepairable"],
        default: "Pending",
    },
    reportedDate: {
        type: Date,
        default: Date.now,
    },
    repairStartDate: {
        type: Date,
        default: null,
    },
    repairEndDate: {
        type: Date,
        default: null,
    },
    repairNotes: {
        type: String,
        trim: true,
        default: "",
    },
    cost: {
        type: Number,
        min: 0,
        default: 0,
    },
}, 
{
    timestamps: true
});

const Repair = mongoose.model('Repair', equipmentRepairSchema);

export default Repair;
