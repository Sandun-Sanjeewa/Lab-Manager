import {Monitor} from "../models/equipment/labEquipment.js";
import EquipmentType from "../models/equipmentTypeModel";
import Lab from "../models/labModel";



export const createMonitor = async (data) =>{
    const{lab, equipmentType,brand,status,addDate, monitorID,resolution,size,refreshRate} = data;
    if (lab|| equipmentType||brand || monitorID||resolution||size||refreshRate){
        throw new Error("All fields are required");
    };

     const trimmedMonitorID = monitorID.trim().replace(/\s+/g, "");
     const existingMonitor = await Monitor.findOne({monitorID:new RegExp(`^${trimmedMonitorID}$`, 'i')});
     if(existingMonitor){
       throw new Error("MonitorID is already exists") ;
     }
       const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("Monitor Should have the Lab");
    }

     const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("Monitor Should have the Equipment type");
    }
    const monitor = new Monitor({
        monitorID: trimmedMonitorID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
            resolution,
            size,
            refreshRate
        }
    });

    return await monitor.save();
};

export const getAllMonitors = async () => {
    return await Monitor.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};


export const getMonitor = async (monitorId) => {
    const monitor = await Monitor.findById(monitorId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return monitor;
};

export const updateMonitor = async (monitorId,updateData)=>{
     const{lab, equipmentType,brand,status,addDate, monitorID,resolution,size,refreshRate,specs} = updateData;
      const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(monitorID && { monitorID: monitorID.trim().replace(/\s+/g, "") }),
    };

     if (specs) {
        if (specs.resolution) updateFields["specs.resolution"] = specs.resolution;
        if (specs.size) updateFields["specs.size"] = specs.size;
        if (specs.refreshRate) updateFields["specs.refreshRate"] = specs.refreshRate;
    } else {
        if (resolution) updateFields["specs.resolution"] = resolution;
        if (size) updateFields["specs.size"] = size;
        if (refreshRate) updateFields["specs.refreshRate"] = refreshRate;
    }

      const updatedMonitor = await Monitor.findByIdAndUpdate(
        monitorId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedMonitor;

};

export const deleteMonitor = async(monitorId)=>{
    const monitor = await Monitor.findByIdAndDelete(monitorId);
    if(!monitorId){
        throw new Error ("Monitor is not found");
    }

    return {
        message:"Monitor deleted successfully"
    };
};

