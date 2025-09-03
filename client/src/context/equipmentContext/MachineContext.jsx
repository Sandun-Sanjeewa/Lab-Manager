import { createContext, useContext, useEffect, useState } from "react";
import { getAllMachines } from "../../services/equipment/machineServices";
import { toast } from "react-toastify";

const MachineContext = createContext();

export const MachineProvider = ({children})=>{
    const [machines,setMachines] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchMachines = async()=>{
        try {
            const res = await getAllMachines();
            setMachines(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch machines");
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchMachines();
    },[]);
    return(
        <MachineContext.Provider value={{machines, setMachines, fetchMachines,loading}}>
            {children}
        </MachineContext.Provider>
    );
};
export const useMachine = () => useContext(MachineContext);
