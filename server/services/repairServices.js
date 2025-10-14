import Repair from "../models/repairModel.js";
export const createRepair = async (data) => {
    const { equipment, issueDescription, reportedBy, assignedTechnician, repairStatus, reportedDate, repairStartDate, repairEndDate, repairNotes, cost } = data;
    if (!equipment || !issueDescription ) {
        throw new Error("All fields are required");
    }

    const repair = new Repair({
        equipment,
        issueDescription,
        reportedBy,
        assignedTechnician,
        repairStatus,
        reportedDate,
        repairStartDate,
        repairEndDate,
        repairNotes,
        cost
    });

    return await repair.save();
};

export const getAllRepairs = async () => {
    return await Repair.find()
        .populate("equipment")
        .populate({ path: "reportedBy", select: "-password" })
        .populate({ path: "assignedTechnician", select: "-password" })
        .exec();
};

export const getRepair = async (repairId) => {
    return await Repair.findById(repairId)
        .populate("equipment")
        .populate({ path: "reportedBy", select: "-password" })
        .populate({ path: "assignedTechnician", select: "-password" })
        .exec();
};
// export const updateRepair = async (repairId, data) => {
//     const { equipment, issueDescription, reportedBy, assignedTechnician, repairStatus, reportedDate, repairStartDate, repairEndDate, repairNotes, cost  } = data;
//     if (!equipment || !issueDescription || !reportedBy) {
//         throw new Error("All required fields must be provided");
//     }

//     return await Repair.findByIdAndUpdate(repairId, data, { new: true })
//         .populate("equipment")
//         .populate({ path: "reportedBy", select: "-password" })
//         .populate({ path: "assignedTechnician", select: "-password" })
//         .exec();
// };

export const updateRepair = async (repairId, data) => {
  
  const updatedRepair = await Repair.findByIdAndUpdate(repairId, data, {
    new: true,
    runValidators: true,
  })
    .populate("equipment")
    .populate({ path: "reportedBy", select: "-password" })
    .populate({ path: "assignedTechnician", select: "-password" })
    .exec();

  if (!updatedRepair) {
    throw new Error("Repair not found");
  }

  return updatedRepair;
};

export const deleteRepair = async (repairId) => { 
    const repair = await Repair.findByIdAndDelete(repairId);
    if(!repair){
        throw new Error ("Repair is not found");
    }
    return{
        message:"Repair Deleted Successfully"
    };
};