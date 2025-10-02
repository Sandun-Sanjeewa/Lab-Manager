import { createContext, useContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/userServices";
import { toast } from "react-toastify";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const res = await getAllUsers();
            setUsers(res.data);
            setLoading(false);

        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Failed to fetch users");
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUsers();
        } else {
            setLoading(false);
            
        }
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers, fetchUsers, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUsers = () => useContext(UserContext);