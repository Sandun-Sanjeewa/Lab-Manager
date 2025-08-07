
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Model";
import LoginForm from "../pages/auth/LoginForm";
import SignupForm from "../pages/auth/SignupForm";
import UserLogOut from "../pages/auth/UserLogOut";
import { jwtDecode } from "jwt-decode";



const Navbar = ({ className }) => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);
    const [isLogOutOpen, setLogOutOpen] = useState(false);
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
            <header>
                <nav className={`sticky top-0 bg-transparent shadow-md z-50 ${className}`}>
                    <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
                        <div>
                            <Link to="/home">My LabManager</Link>
                        </div>
                        <ul className=" hidden md:flex space-x-6 ">
                            <li><Link to="/home">Home</Link></li>
                            {role === "superadmin" && <li><Link to="/dashboard">Admin Panel</Link></li>}
                            {["superadmin", "assistant"].includes(role) && (
                                <li><Link to="/assistantdashboard">Assistant dashboard</Link></li>
                            )}

                            <li><Link to="/about">About</Link></li>
                            {isLogin ?
                                (
                                    <li>

                                        <button onClick={() => setLogOutOpen(true)}>LogOut</button>
                                        <Modal
                                            isOpen={isLogOutOpen}
                                            onClose={() => setLogOutOpen(false)}
                                            title=""
                                        >
                                            <UserLogOut
                                                onClose={() => setLogOutOpen(false)}
                                                onLogout={() => {
                                                    setToken(null);
                                                    setRole(null);
                                                    setLogOutOpen(false);
                                                }}
                                            />
                                        </Modal>
                                    </li>
                                )
                                :
                                (

                                    <>
                                        <li>
                                            <button onClick={() => setLoginOpen(true)}>
                                                Login
                                            </button>
                                            <Modal
                                                isOpen={isLoginOpen}
                                                onClose={() => setLoginOpen(false)}
                                                title="Login"
                                            >
                                                <LoginForm onClose={() => setLoginOpen(false)} />
                                            </Modal>
                                        </li>

                                        <li>
                                            <button
                                                onClick={() => setSignUpOpen(true)}
                                            >
                                                Signup
                                            </button>
                                            <Modal
                                                isOpen={isSignUpOpen}
                                                onClose={() => setSignUpOpen(false)}
                                                title="User Signup"
                                            >
                                                <SignupForm onClose={() => setSignUpOpen(false)} />
                                            </Modal>
                                        </li>

                                    </>


                                )}

                        </ul>

                    </div>



                </nav>
            </header>

        </>
    );
};
export default Navbar