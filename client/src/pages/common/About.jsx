import { Users,Building,MonitorSpeaker,MonitorCog,CalendarClock} from "lucide-react";
import Navbar from "../../containers/Navbar";
import PageLayout from "../../containers/PageLayout";
import EntityCard from "../../components/EntityCard";

const About = () => {
    return (
        

        <>
            <PageLayout
                pagecontent={
                    <>
                        <div className=" bg-gray-50 text-gray-900 px-10 pt-10">
                            <section className="bg-gray-100 text-zinc-900 py-16 px-6 text-center">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">About DCS Lab Manager</h1>
                                <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify">
                                    DCS Lab Manager is a modern platform that streamlines computer lab management for the University of Ruhuna.
                                    Manage equipment, schedules, and maintenance efficiently with ease and transparency.
                                </p>
                            </section>

                            <section className="flex md:p-4 justify-around">

                                <EntityCard
                                    entityIcon={<Users className="md:w-16 md:h-16 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    entityName={"Users"}
                                />
                                <EntityCard
                                entityIcon={<Building className="md:w-16 md:h-16 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                entityName={"Labs"}
                                />
                                <EntityCard
                                entityIcon={<MonitorSpeaker className="md:w-16 md:h-16 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                entityName={"Equipments"}
                                />
                                <EntityCard
                                entityIcon={<MonitorCog className="md:w-16 md:h-16 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                entityName={"Repairs"}
                                />
                                <EntityCard
                                entityIcon={<CalendarClock className="md:w-16 md:h-16 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                entityName={"Schedules"}
                                />
                                
                            </section>
                            <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold mb-2">Equipment Management</h3>
                                        <p>Track computers, monitors, UPS, projectors, keyboards, mice, and more with detailed specifications.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold mb-2">Lab Scheduling</h3>
                                        <p>Plan and view lab sessions for practical lectures, workshops, and events easily.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold mb-2">User Roles</h3>
                                        <p>Assign roles for students, lecturers, lab assistants, and technicians with tailored access.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold mb-2">Maintenance Tracking</h3>
                                        <p>Monitor machine repairs, antivirus updates, and replacement schedules efficiently.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                                        <p>Optimized for desktops, tablets, and mobile devices for seamless access anywhere.</p>
                                    </div>
                                </div>
                            </section>
                            <section className="bg-gray-100 py-16 px-6">
                                <h2 className="text-3xl font-bold text-center mb-10">Who Can Use DCS Lab Manager</h2>
                                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold text-xl mb-2">Lab Assistants</h3>
                                        <p>Manage lab resources, schedule sessions, and monitor lab usage efficiently.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold text-xl mb-2">Technicians</h3>
                                        <p>Keep track of repairs and preventive maintenance tasks for lab equipment.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold text-xl mb-2">Lecturers</h3>
                                        <p>Reserve labs and schedule practical sessions for students.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold text-xl mb-2">Students</h3>
                                        <p>View lab schedules, available resources, and upcoming events easily.</p>
                                    </div>
                                </div>
                            </section>
                            <section className="py-16 px-6 max-w-5xl mx-auto">
                                <h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>
                                <ul className="list-disc list-inside space-y-3 text-lg">
                                    <li>Minimize manual tracking of lab equipment and schedules.</li>
                                    <li>Prevent scheduling conflicts and double-booking of resources.</li>
                                    <li>Improve maintenance planning and equipment utilization.</li>
                                    <li>Increase transparency and accountability in lab operations.</li>
                                </ul>
                            </section>
                            <section className="bg-gray-100 py-16 px-6 max-w-5xl mx-auto">
                                <h2 className="text-3xl font-bold text-center mb-10">Technology Stack</h2>
                                <div className="grid md:grid-cols-3 gap-8 text-center">
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold mb-2">Frontend</h3>
                                        <p>React.js, Tailwind CSS</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold mb-2">Backend</h3>
                                        <p>Node.js, Express.js</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <h3 className="font-semibold mb-2">Database & APIs</h3>
                                        <p>MongoDB, Google Calendar API</p>
                                    </div>
                                </div>
                            </section>
                            <section className="py-16 px-6 text-center">
                                <h2 className="text-3xl font-bold mb-4">Contact & Support</h2>
                                <p className="mb-2">For support, feedback, or inquiries, reach out to our project team:</p>
                                <p>Email: <span className="font-semibold">support@dcslabmanager.com</span></p>
                                <p>Phone: <span className="font-semibold">+94 XXX XXX XXXX</span></p>
                            </section>

                        </div>
                    </>
                }
            />
        </>
    );
};
export default About;