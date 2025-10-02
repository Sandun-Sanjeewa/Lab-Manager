import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = ({ maincontent }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-200">
                <div className="">
                    <Navbar className={"bg-gray-50 text-gray-950"} />
                </div>
                <div className="flex flex-col md:flex-row   ">
                    <Sidebar/>
                    <main className="bg-gray-200  w-full px-4 mt-[40px] md:pl-[66px] md:pr-[10px] md:mt-[50px] md:pt-2 ">
                        {maincontent}

                    </main>
                </div>
            </div>
        </>
    );
};
export default Dashboard;