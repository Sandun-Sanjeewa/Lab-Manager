import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Home, Settings, LayoutDashboard, Building, MonitorSpeaker, MonitorCog, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const isLogin = !!token;
    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setRole(decoded.role);
            } catch (error) {
                console.error("Invalid token");
                setRole(null);
            }
        } else {
            setRole(null);
        }
    }, [token]);

    return (
        <>
            {isLogin ? (
                <>
                    <aside className="hidden md:flex fixed z-10 top-[60px] bottom-[20px] md:ml-2 
                     w-[40px] md:w-[50px] h-[calc(100vh-80px)] 
                     flex-col bg-gray-900 divide-y divide-gray-700 rounded-md justify-around"
                    >

                        <div className="">
                            <div className="py-4 flex justify-center">
                                <Link to="/home"><Home className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>
                            </div>
                            <div className="py-4 flex justify-center">
                                {["superadmin", "assistant"].includes(role) && (
                                    <Link to="/assistantdashboard"> <LayoutDashboard className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>
                                )}
                                {["superadmin", "technician"].includes(role) && (
                                    <Link to="/techniciondashboard"> <LayoutDashboard className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>
                                )}
                                {["superadmin", "lecturer"].includes(role) && (
                                    <Link to="/lecturerdashboard"> <LayoutDashboard className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>
                                )}
                            </div>
                        </div>

                        <div className=" h-full flex flex-col justify-around lg:pt-6 lg:pb-28">
                            <div className="py-4 flex justify-center">
                                <Link to="/labtable"><Building className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>

                            </div>
                            <div className="py-4 flex justify-center">
                                <Link to="/labequipment"><MonitorSpeaker className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>

                            </div>
                            <div className="py-4 flex justify-center">
                                <Link> <MonitorCog className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>
                               
                            </div>
                            <div className="py-4 flex justify-center">
                                <Link><CalendarClock className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} /></Link>
                                
                            </div>
                        </div>

                        <div className="">
                            <div className="py-4 flex justify-center items-end">
                                <Settings className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                        </div>
                    </aside>
                </>
            ) : (<></>)}

        </>
    );
};
export default Sidebar