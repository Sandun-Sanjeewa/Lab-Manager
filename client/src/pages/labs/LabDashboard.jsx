import Card from "../../components/card";
import { useEquipmentType } from "../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../context/LabContext";
import { useUsers } from "../../context/UserContext";
const LabDashboard = () => {
    const { labs, loading: labsLoading } = useLabs();
    const {equipmentTypes} = useEquipmentType();
    const {users} = useUsers();
    const assistantsCount = users.filter(u => u.role === "assistant").length;

    if (labsLoading) return <p>Loading Dashboard...</p>;




    return (
        <>
            <div className="flex md:flex-row flex-col md:min-h-screen">

                <aside className="bg-gray-900 p-2 md:w-[50px] md:min-h-screen h-[50px] ">
                    <h1 className="text-2xl  mb-4 text-gray-100"></h1>
                </aside>

                <main className=" bg-gray-100 w-full md:p-4 p-2 ">
                    <div className=" w-full h-[50px]  mb-2 ">
                        <span className="text-xl md:text-2xl">Dashboard</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4 md:gap-6 2xl:gap-7.5 ">
                        <Card 
                        CardClass={"bg-gray-200 rounded-md md:h-[150px] h-[100px] shadow-sm"} 
                        TopicClass={"bg-white h-full rounded-md  md:p-4"} 
                        topic={"Assistants"} 
                        content={assistantsCount}
                        //content={users.length}
                        />
                        <Card
                            CardClass="bg-gray-200 rounded-md md:h-[150px] h-[100px] shadow-sm"
                            TopicClass="bg-white h-full rounded-md  md:p-4"
                            topic="Total Labs"
                            content={labs.length}
                        />


                        <Card 
                        CardClass={"bg-gray-200 rounded-md md:h-[150px] h-[100px] shadow-sm"} 
                        TopicClass={"bg-white h-full rounded-md  md:p-4"} 
                        topic={"Total Equipment types"} 
                        content={equipmentTypes.length}
                        />
                        <Card 
                        CardClass={"bg-gray-200 rounded-md md:h-[150px] h-[100px] shadow-sm"} 
                        TopicClass={"bg-white h-full rounded-md  md:p-4"} 
                        topic={"Repaires"} />




                    </div>
                    <div className="grid grid-cols-12 grid-rows-12 gap-4 mt-4 bg-gray-100 md:h-[400px] ">
                        <div className="bg-white col-span-12 row-span-12 md:col-span-8 md:row-span-12 md:rounded-md rounded-sm shadow-md">
                            <h1>
                                Schedule
                            </h1>
                        </div>
                        <div className="bg-white md:col-span-4 md:row-span-12 md:rounded-md rounded-sm shadow-md">
                            <h1>
                                Calender
                            </h1>
                        </div>

                    </div>
                </main>
            </div>

        </>
    );
};
export default LabDashboard 