import departmentimg from "../../assets/departmentimg.png";
import RuhunuUniLogo from "../../assets/RuhunuUniLogo.png";
import Navbar from "../../containers/Navbar";
import { Laptop, CalendarDays, Wrench, Users, Megaphone } from "lucide-react";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-100">
            <Navbar className="bg-gray-50 shadow-md" />

            <div className="relative h-[60vh] overflow-hidden mt-[50px] md:mt-[60px] mx-[6px] md:mx-[10px] rounded-sm md:rounded-md">
                <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full"
                    style={{ backgroundImage: `url(${departmentimg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/30 to-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90"></div>
                {/* <div className="flex  md:flex-row pl-[10px] md:pl-[50px] md:pt-[50px] " >
                    <div className=' '>
                        <img
                            src={RuhunuUniLogo}
                            alt="UniLogo"
                            className="h-full w-[40px] sm:w-full  sm:h-[60px] md:h-[100px] object-center"
                        />
                    </div>

                    <div className='flex flex-col pl-4 md:pl-6 w-full'>
                        <h1 className=" md:text-5xl">Department of Computer Science</h1>
                        <h3 className="text-gray-200 mt-4 text-lg md:text-2xl lg:text-3xl font-light">
                            University of Ruhuna
                        </h3>
                    </div>
                </div> */}
                <div className="relative text-gray-200 z-10 flex flex-col justify-start h-full px-6 sm:px-12 md:px-4 md:pt-10 lg:px-4  sm:text-left">
                    <div className="flex  md:flex-row pt-[40px]  md:pt-[50px] " >
                        <div className=' '>
                            <img
                                src={RuhunuUniLogo}
                                alt="UniLogo"
                                className="h-full w-[60px] sm:w-full  sm:h-[60px] md:h-[100px] object-center"
                            />
                        </div>

                        <div className='flex flex-col pl-4 md:pl-6 w-full'>
                            <h1 className=" md:text-5xl">Department of Computer Science</h1>
                            {/* <h3 className=" md:mt-2 md:text-3xl">University Of Ruhuna</h3> */}
                            <h3 className="text-gray-200  md:mt-4 text-lg md:text-2xl lg:text-3xl font-light">
                                University of Ruhuna
                            </h3>
                        </div>
                    </div>

                    {/* <p className="mt-6 text-gray-300 max-w-2xl text-sm md:text-lg lg:text-xl leading-relaxed">
                        Welcome to the <span className="font-semibold text-white">DCS Lab Manager</span> —
                        a centralized system to manage computer labs, schedules, equipment, and users
                        with efficiency and ease.
                    </p> */}
                    {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg transition duration-300">
                            Get Started
                        </button>
                        <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-xl shadow-lg transition duration-300">
                            Learn More
                        </button>
                    </div> */}
                </div>
            </div>

            <section className="py-8 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105  hover:shadow-blue-300">
                            <Laptop className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Lab Management</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Organize multiple computer labs and keep track of lab resources in one place.
                            </p>
                        </div>
                        <div className="flex flex-col items-center  p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105  hover:shadow-green-300">
                            <CalendarDays className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Scheduling</h3>
                            <p className="text-gray-600 mt-2 text-sm text-justify">
                                Manage practical sessions and schedules with Google Calendar integration.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105  hover:shadow-red-300">
                            <Wrench className="w-12 h-12 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Equipment Tracking</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Monitor hardware details, software installations, and maintenance schedules.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105  hover:shadow-purple-300">
                            <Users className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">User Roles</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Role-based access for lab assistants, students, lecturers, and technicians.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <Megaphone className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">News & Updates</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 shadow-md rounded-2xl hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-gray-800">New Lab Opening</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Lab 3 is now open with upgraded high-performance computers and new projectors.
                            </p>
                            <p className="text-xs text-gray-500 mt-4">September 20, 2025</p>
                        </div>
                        <div className="p-6 bg-gray-50 shadow-md rounded-2xl hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-gray-800">Scheduled Maintenance</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Lab 1 will be under maintenance on October 2, 2025. Please use Lab 2 during this period.
                            </p>
                            <p className="text-xs text-gray-500 mt-4">September 25, 2025</p>
                        </div>
                        <div className="p-6 bg-gray-50 shadow-md rounded-2xl hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-gray-800">Workshop Announcement</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                A special workshop on Cybersecurity will be held for 3rd year students in Lab 2.
                            </p>
                            <p className="text-xs text-gray-500 mt-4">October 5, 2025</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-auto">
                <p className="text-sm">
                    © {new Date().getFullYear()} Department of Computer Science, University of Ruhuna. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
