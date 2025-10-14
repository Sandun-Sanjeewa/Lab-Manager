import departmentimg from "../../assets/departmentimg.png";
import RuhunuUniLogo from "../../assets/RuhunuUniLogo.png";
import Navbar from "../../containers/Navbar";
import { Laptop, CalendarDays, Wrench, Users, Megaphone, Building } from "lucide-react";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-100 scroll-smooth md:scroll-auto">
            <Navbar className="bg-gray-100 shadow-md" />

            <div className="relative h-[90vh] overflow-hidden mt-[50px] md:mt-[60px] mx-[6px] md:mx-[10px] rounded-sm md:rounded-md">
                <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full "
                    style={{ backgroundImage: `url(${departmentimg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/20 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90"></div>

                <div className="absolute bottom-0 w-full bg-white/20 backdrop-blur-xs h-[160px] flex items-center px-6 sm:px-12 md:px-16 lg:px-20 ">
                    <img
                        src={RuhunuUniLogo}
                        alt="UniLogo"
                        className="h-[60px] md:h-[80px] drop-shadow-lg"
                    />
                    <div className="flex flex-col pl-4 md:pl-6 text-white drop-shadow-md">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
                            Department of Computer Science
                        </h1>
                        <h3 className="text-white/90 md:mt-2 text-lg md:text-2xl lg:text-3xl font-light">
                            University of Ruhuna
                        </h3>
                    </div>
                </div>
            </div>

            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-4 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 ">
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105 hover:shadow-purple-300 duration-700 ease-in-out">
                            <Users className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">User Roles</h3>
                            <p className="text-gray-600 mt-2 text-sm text-justify">
                                Role-based access for students, lab assistants, lecturers and technicians.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105 hover:shadow-yellow-200 duration-700 ease-in-out">
                            <Building className="w-12 h-12 text-yellow-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Lab Management</h3>
                            <p className="text-gray-600 mt-2 text-sm text-justify">
                                Organize computer labs and keep track of lab resources in one place.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105 hover:shadow-blue-300 duration-700 ease-in-out">
                            <Laptop className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Equipments</h3>
                            <p className="text-gray-600 mt-2 text-sm text-justify">
                                Manage and monitor lab equipment including computers, monitors, and accessories with real-time updates.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105 hover:shadow-green-300 duration-700 ease-in-out">
                            <CalendarDays className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Scheduling</h3>
                            <p className="text-gray-600 mt-2 text-sm text-justify">
                                Manage practical sessions and schedules with Google Calendar integration.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition hover:scale-105 hover:shadow-red-300 duration-700 ease-in-out">
                            <Wrench className="w-12 h-12 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Equipment Tracking</h3>
                            <p className="text-gray-600 mt-2 text-sm text-justify">
                                Monitor hardware details, software installations, and maintenance schedules.
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
