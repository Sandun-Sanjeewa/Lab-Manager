
import Card from "../../components/Card";
import EquipmentCard from "../../components/EquipmentCard";
import { useEquipment } from "../../context/equipmentContext/EquipmentContext";
import { useEquipmentType } from "../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../context/LabContext";
import { useUsers } from "../../context/UserContext";
import MachineTable from "../equipment/machine/MachineTable";
import MonitorTable from "../equipment/monitor/MonitorTable";
const LabDashboard = () => {
    const { labs, loading: labsLoading } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const { users } = useUsers();
    const assistantsCount = users.filter(u => u.role === "assistant").length;
    const { machines, printers, scaners, monitors, upss, cables, keyboards, mics, mouses, projectors, laps } = useEquipment();

    if (labsLoading) return <p>Loading Dashboard...</p>;




    return (
        <>
            <div className="flex md:flex-row flex-col ">

                <aside className="bg-gray-900 p-2 md:w-[50px]  md:min-h-screen h-[50px] w-full fixed  ">
                    <h1 className="text-2xl  mb-4 text-gray-100"></h1>
                </aside>

                <main className=" bg-gray-100 w-full md:p-4 p-2 md:pl-[60px] pt-[50px] md:min-h-screen ">
                    <div className=" w-full h-[30px]  mb-2 ">
                        <span className="text-xl md:text-2xl">Dashboard</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4 md:gap-6 2xl:gap-7.5  ">
                        <Card
                            CardClass={"bg-gray-200 md:h-[150px] h-[100px] shadow-sm  "}
                            TopicClass={"bg-white h-full   md:p-4"}
                            topic={"Assistants"}
                            content={assistantsCount}
                        //content={users.length}
                        />
                        <Card
                            CardClass="bg-gray-200  md:h-[150px] h-[100px] shadow-sm"
                            TopicClass="bg-white h-full   md:p-4"
                            topic="Total Labs"
                            content={labs.length}
                        />


                        <Card
                            CardClass={"bg-gray-200  md:h-[150px] h-[100px] shadow-sm "}
                            TopicClass={"bg-white h-full   md:p-4"}
                            topic={"Total Equipment types"}
                            content={equipmentTypes.length}
                        />
                        <Card
                            CardClass={"bg-gray-200  md:h-[150px] h-[100px] shadow-sm"}
                            TopicClass={"bg-white h-full  md:p-4"}
                            topic={"Repaires"} />




                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 my-4 gap-2">
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={machines.length}
                            equipmentName={"Machines"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={printers.length}
                            equipmentName={"Printers"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={scaners.length}
                            equipmentName={"Scaners"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={monitors.length}
                            equipmentName={"Monitors"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={upss.length}
                            equipmentName={"UPS"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={cables.length}
                            equipmentName={"Cables"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={keyboards.length}
                            equipmentName={"Keyboards"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={mics.length}
                            equipmentName={"Mics"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={mouses.length}
                            equipmentName={"Mouses"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-md text-gray-900"}
                            equipmentQuantity={projectors.length}
                            equipmentName={"Projectors"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-lg text-gray-900"}
                            equipmentQuantity={laps.length}
                            equipmentName={"Laps"}
                        />
                        <EquipmentCard
                            EquipmetsClass={"h-[100px]  bg-white flex justify-center items-center "}
                            EquipmentsQuantity={"text-5xl text-gray-800 "}
                            EquipmentsName={"text-lg text-gray-900"}
                            equipmentQuantity={machines.length}
                            equipmentName={"Machines"}
                        />


                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <MachineTable />
                        <MonitorTable />
                    </div>

                    {/* <div className="grid grid-cols-12  gap-4 mt-2 bg-gray-100  ">
                        <div className="bg-white col-span-12  md:col-span-2  md:rounded-md rounded-sm shadow-md  md:pl-4 md:pt-2 px-6 ">
                            <span className="text-md md:text-md ">Total Equipments</span>

                            <table className=" table-auto  ">

                                <tbody>
                                    <tr >
                                        <td className=" flex justify-start "> Machine</td>
                                        <td >{machines.length}</td>
                                    </tr>
                                    <tr>
                                        <td className=" flex justify-start"> Printers</td>
                                        <td >{printers.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start "> Scaners</td>
                                        <td >{scaners.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> Monitors</td>
                                        <td >{monitors.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Ups</span></td>
                                        <td >{upss.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Cables</span></td>
                                        <td >{cables.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Keyboards</span></td>
                                        <td >{keyboards.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Mics</span></td>
                                        <td >{mics.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Mouses</span></td>
                                        <td>{mouses.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Projectors</span></td>
                                        <td>{projectors.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="  flex justify-start"> <span>Laps</span></td>
                                        <td >{laps.length}</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        <div className="bg-white col-span-12  md:col-span-10  md:rounded-md rounded-sm shadow-md">
                            <h1>
                                Calender
                            </h1>
                        </div>

                    </div> */}
                </main>
            </div>

        </>
    );
};
export default LabDashboard 