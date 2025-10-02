import { createContext, useContext, useEffect, useState } from "react";
import { getAllRepairs } from "../services/repairServices";
import { toast } from "react-toastify";

const RepairContext = createContext();

export const RepairProvider = ({children})=>{
    const [repairs, setRepairs]=useState([]);
    const [loading,setLoading] = useState(true);
    const fetchRepairs = async()=>{
        try {
            const res = await getAllRepairs();
            setRepairs(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("failed to fetch repairs");
        }
    };

    useEffect(()=>{
        fetchRepairs();
    },[]);

    return(
        <RepairContext.Provider value={{repairs,setRepairs,fetchRepairs,loading}} >
            {children}
        </RepairContext.Provider>
    );
    
};

export const useRepair = () => useContext(RepairContext);