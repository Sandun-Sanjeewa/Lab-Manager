import { createContext, useContext, useState, useEffect } from "react";
import { getAllLabs } from "../services/labServices";
import { toast } from "react-toastify";
const LabContext = createContext();
export const LabProvider = ({ children }) => {
    const [labs, setLabs] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchLabs = async () => {
        try {
            const res = await getAllLabs();
            setLabs(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch labs");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLabs();
    }, []);
    return (
        <LabContext.Provider value={{ labs, setLabs, fetchLabs, loading }}>
            {children}
        </LabContext.Provider>
    );
};

export const useLabs = () => useContext(LabContext);