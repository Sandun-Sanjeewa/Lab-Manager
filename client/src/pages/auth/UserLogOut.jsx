import { useNavigate } from "react-router-dom";

const UserLogOut = () =>{
   const navigate = useNavigate();
    const handleLogout  = () =>{
        localStorage.removeItem("token");
        navigate("/landing");
    };
    return(
        <>
        <button className="w-auto px-2 max-w-[180px] m-4 items-center justify-center h-10 text-blue-700 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-blue-700 hover:text-black" onClick={handleLogout}>Logout</button>
        </>
    );
};

export default UserLogOut