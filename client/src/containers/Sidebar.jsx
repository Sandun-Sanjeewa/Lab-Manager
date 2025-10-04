import { Home, Settings, LayoutDashboard, Building,MonitorSpeaker,MonitorCog,CalendarClock  } from "lucide-react";
const Sidebar = () =>{
    return(
        <>

             <aside className="hidden md:flex fixed z-10 top-[60px] bottom-[20px] md:ml-2 
                     w-[40px] md:w-[50px] h-[calc(100vh-80px)] 
                     flex-col bg-gray-900 divide-y divide-gray-700 rounded-md justify-around"
                    >

                        <div className="">
                            <div className="py-4 flex justify-center">
                                <Home className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                            <div className="py-4 flex justify-center">
                                <LayoutDashboard className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                        </div>

                        <div className=" ">
                            <div className="py-4 flex justify-center">
                                <Building className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                            <div className="py-4 flex justify-center">
                                <MonitorSpeaker className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                            <div className="py-4 flex justify-center">
                                <MonitorCog className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                            <div className="py-4 flex justify-center">
                                <CalendarClock className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2} />
                            </div>
                        </div>

                        <div className="">
                           <div className="py-4 flex justify-center items-end">
                            <Settings className="md:w-6 md:h-6 text-gray-100" strokeWidth={1.2}/>
                           </div>
                        </div>
                    </aside>

        </>
    );
};
export default Sidebar