import { useNavigate } from "react-router-dom";

const UserLogOut = ({onClose, onLogout}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        if (onLogout) onLogout();
        navigate("/landing");
    };
    return (
        <>
            <div className="text-gray-500 ">
                <h3>Do you want to logout?</h3>
                <div className="flex justify-around items-center h-[100px]">
                    <button className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 ml-4 hover:bg-green-700" onClick={handleLogout}>Yes</button>
                    <button className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 hover:bg-red-700 " onClick={onClose}>No</button>
                </div>
            </div>

        </>
    );
};

export default UserLogOut