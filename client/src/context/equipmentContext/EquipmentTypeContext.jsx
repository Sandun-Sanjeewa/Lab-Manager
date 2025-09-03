import { createContext, useContext, useEffect, useState } from "react";
import { getAllEquipments } from "../../services/equipmentServices";
import { toast } from "react-toastify";

const EquipmentTypeContext = createContext();

export const EquipmentTypeProvider = ({children}) =>{
    const [equipmentTypes, setEquipmentTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchEquipmentTypes = async()=>{
        try {
            const res = await getAllEquipments();
            setEquipmentTypes(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("failed to fetch equipments types");
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchEquipmentTypes();
    },[]);

    return(
        <EquipmentTypeContext.Provider value={{equipmentTypes,setEquipmentTypes,fetchEquipmentTypes,loading}}>
            {children}
        </EquipmentTypeContext.Provider>
    );
};
export const useEquipmentType = () => useContext(EquipmentTypeContext);

