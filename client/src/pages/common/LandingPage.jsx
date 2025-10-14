import { LogIn } from 'lucide-react';
import { useState } from "react";
import LandingImg1 from "../../assets/LandingImg1.png";
import UniLogo from "../../assets/UniLogo.png";
import RuhunuUniLogo from "../../assets/RuhunuUniLogo.png";
import Navbar from "../../containers/Navbar";
import Modal from "../../components/Model";
import SignupForm from "../auth/SignupForm";
import Footer from "../../containers/Footer";
import { Users, Building, MonitorSpeaker, MonitorCog, CalendarClock } from "lucide-react";
import EntityCard from '../../components/EntityCard';


const LandingPage = () => {
    const [isSignUpOpen, setSignUpOpen] = useState(false);
    return (
        <>
            <div className="w-full ">


                <Navbar className="bg-[#0A0A0A] text-gray-100" />
                <main className="flex flex-col bg-[#0A0A0A] text-gray-100 pt-[40px] md:pt-[50px]  min-h-screen w-full">
                    <div className=" h-[calc(100vh-50px)] flex flex-col justify-around">


                        <div className="flex  md:flex-row pl-[10px] md:pl-[50px] md:pt-[50px] " >
                            <div className=' '>
                                <img
                                    src={RuhunuUniLogo}
                                    alt="UniLogo"
                                    className="h-full w-[60px] sm:w-full  sm:h-[60px] md:h-[100px] object-center"
                                />
                            </div>

                            <div className='flex flex-col pl-4 md:pl-6 w-full'>
                                <h1 className=" md:text-5xl">Department of Computer Science</h1>

                                <h3 className="text-gray-200 mt-4 text-lg md:text-2xl lg:text-3xl font-light">
                                    University of Ruhuna
                                </h3>
                            </div>
                        </div>
                        <div className='flex items-center md:h-[200px] pl-[10px] md:pl-[145px]'>

                        </div>



                        <div className="flex  justify-end pr-[60px] md:pr-[100px]  ">
                            <div className='bg-gray-900 group group-hover:bg-gray-800 rounded-md '>
                                <button
                                    onClick={() => setSignUpOpen(true)}
                                    className="w-auto px-2 md:px-4 max-w-[100px] md:max-w-[180px] m-2 items-center justify-center h-10 text-gray-100 text-2xl transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded group-hover:border-blue-700 group-hover:text-gray-50"
                                >
                                    <LogIn />
                                </button>
                            </div>

                        </div>


                        <div className="flex md:p-4 justify-around md:mt-8 ">
                            <EntityCard
                                entityIcon={<Users className="md:w-16 md:h-16 text-black" strokeWidth={1} />}
                                EntityCardclassName={""}
                            />
                            <EntityCard
                                entityIcon={<Building className="md:w-16 md:h-16 text-black" strokeWidth={1} />}
                                EntityCardclassName={""}
                            />
                            <EntityCard
                                entityIcon={<MonitorSpeaker className="md:w-16 md:h-16 text-black" strokeWidth={1} />}
                                EntityCardclassName={""}
                            />
                            <EntityCard
                                entityIcon={<MonitorCog className="md:w-16 md:h-16 text-black" strokeWidth={1} />}
                                EntityCardclassName={""}
                            />
                            <EntityCard
                                entityIcon={<CalendarClock className="md:w-16 md:h-16 text-black" strokeWidth={1} />}
                                EntityCardclassName={""}
                            />
                        </div>
                        <Modal
                            isOpen={isSignUpOpen}
                            onClose={() => setSignUpOpen(false)}
                            title="User Signup"
                        >
                            <SignupForm onClose={() => setSignUpOpen(false)} />
                        </Modal>

                    </div>

                </main>


            </div>




        </>

    );
};

export default LandingPage;
