
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Model";
import LoginForm from "../pages/auth/LoginForm";
import SignupForm from "../pages/auth/SignupForm";



const Navbar = ({ className }) => {

    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);

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
                            <li><Link to="/about">About</Link></li>
                            <li><button
                                onClick={() => setLoginOpen(true)}
                            >Login</button> <Modal
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
                        </ul>

                    </div>



                </nav>
            </header>

        </>
    );
};
export default Navbar