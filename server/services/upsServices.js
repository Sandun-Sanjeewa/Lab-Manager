import UPS from "../models/equipment/UPSDiscriminator.js";
import EquipmentType from "../models/equipmentTypeModel.js";
import Lab from "../models/labModel.js";

export const createUps = async(data)=>{
    const{lab, equipmentType,brand,status,addDate,upsID,capacity,batteryHealth}=data;
    if(!lab || !equipmentType || !brand || !upsID || !capacity || !batteryHealth){
        throw new Error ("All fields are required");
    }

    const trimmedUpsID = upsID.trim().replace(/\s+/g, "");
    const existingUps = await UPS.findOne({upsID:new RegExp(`^${trimmedUpsID}$`, 'i')});
    if(existingUps){
       throw new Error("existingUpsID is already exists") ;
     }

          const existingLab = await Lab.findById(lab);
    if (!existingLab) {
        throw new Error("UPS Should have the Lab");
    }

     const existingEquipmentType = await EquipmentType.findById(equipmentType);
    if (!existingEquipmentType) {
        throw new Error("UPS Should have the Equipment type");
    }

     const ups = new UPS({
        upsID: trimmedUpsID,
        lab,
        equipmentType,
        brand,
        status,
        addDate,
        specs: {
           capacity,
           batteryHealth
        }
    });

    return await ups.save();
};

export const getAllUps = async () => {
    return await UPS.find()
        .populate('lab')
        .populate('equipmentType')
        .exec();
};

export const getUps = async (upsId) => {
    const ups = await UPS.findById(upsId)
        .populate('lab')
        .populate('equipmentType')
        .exec();
    return ups;
};

export const updateUps = async (upsId,updateData)=>{
     const{lab, equipmentType,brand,status,addDate, upsID,capacity, batteryHealth,specs} = updateData;
      const updateFields = {
        ...(lab && { lab }),
        ...(equipmentType && { equipmentType }),
        ...(brand && { brand }),
        ...(status && { status }),
        ...(addDate && { addDate }),
        ...(upsID && { upsID: upsID.trim().replace(/\s+/g, "") }),
    };

     if (specs) {
        if (specs.capacity) updateFields["specs.capacity"] = specs.capacity;
        if (specs.batteryHealth) updateFields["specs.batteryHealth"] = specs. batteryHealth;
       
    } else {
        if (capacity) updateFields["specs.capacity"] = capacity;
        if ( batteryHealth) updateFields["specs.batteryHealth"] =  batteryHealth;
       
    }

      const updatedUps = await UPS.findByIdAndUpdate(
        upsId,
        updateFields,
        { new: true }
    )
        .populate("lab")
        .populate("equipmentType");

    return updatedUps;

};

export const deleteUps = async(upsId)=>{
    const ups = await UPS.findByIdAndDelete(upsId);
    if(!upsId){
        throw new Error ("Ups is not found");
    }

    return {
        message:"Ups deleted successfully"
    };
};