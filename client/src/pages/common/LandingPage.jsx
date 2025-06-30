import { useState } from "react";
import LandingImg1 from "../../assets/LandingImg1.png";
import Navbar from "../../containers/Navbar";
import Modal from "../../components/Model";
import SignupForm from "../auth/SignupForm";
import Footer from "../../containers/Footer";


const LandingPage = () => {
    const [isSignUpOpen, setSignUpOpen] = useState(false);
    return (
        <>
            <div className="w-full min-h-screen overflow-auto scrollbar-hide ">
                <div className="relative z-10 w-full h-full bg-cover bg-center bg-no-repeat  overflow-hidden"
                    style={{ backgroundImage: `url(${LandingImg1})`, }}
                >
                    <div className="flex flex-col justify-between min-h-screen">
                        <Navbar className="text-gray-50" />


                        <main className="flex-grow">
                            <div className="flex flex-col mt-16 ml-16">
                                <h1 className="text-gray-50 text-5xl">Department of Computer Science</h1>
                                <h3 className="text-gray-100 mt-2 text-3xl">University Of Ruhuna</h3>
                            </div>
                            <div className="mt-32 ml-16">
                                <h3 className="text-2xl font-bold mb-4 text-gray-600">Built for the Department of Computer Science</h3>
                                <p className="text-gray-600 w-[40%] text-justify">
                                    DCSLab Manager is designed for efficient lab operations at the University of Ruhuna.
                                    It simplifies tracking hardware, scheduling labs, and managing multiple user roles effectively.
                                </p>
                            </div>

                            <div className="flex justify-end mr-30">
                                <button
                                    onClick={() => setSignUpOpen(true)}
                                    className="w-auto px-4 max-w-[180px] m-4 items-center justify-center h-10 text-gray-100 text-2xl transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-blue-700 hover:text-blue-200"
                                >
                                    Get Started
                                </button>
                            </div>

                            <Modal
                                isOpen={isSignUpOpen}
                                onClose={() => setSignUpOpen(false)}
                                title="User Signup"
                            >
                                <SignupForm onClose={() => setSignUpOpen(false)} />
                            </Modal>
                        </main>
                        {/* <div >
                            <Footer />
                        </div> */}

                    </div>

                </div>
                <div >
                    <Footer />
                </div>
            </div>
        </>

    );
};

export default LandingPage;
