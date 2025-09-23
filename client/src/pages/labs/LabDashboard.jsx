
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

                <aside className="bg-gray-900 p-2 md:w-[50px]  md:min-h-screen h-[50px] w-full fixed z-10 ">
                    <h1 className="text-2xl  mb-4 text-gray-100">
                        dg
                    </h1>
                </aside>

                <main className=" bg-gray-200 w-full md:p-4 p-2 md:pl-[60px] pt-[50px] md:min-h-screen divide-y divide-red-300">
                    <div>
                        <div className=" w-full h-[30px] md:h-[50px]  mb-2 text-gray-900 flex items-center pl-4 ">
                            <span className="text-xl md:text-2xl">Dashboard</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4 md:gap-6 2xl:gap-7.5 md:px-10 md:pt-10 ">
                            <Card
                                CardClass=""
                                TopicClass=""
                                topic="Assistants"
                                svgicon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 sm:w-8 md:w-16">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>


                                }
                                content={assistantsCount}
                            />

                            <Card
                                CardClass=""
                                TopicClass=""
                                topic={"Labs"}
                                svgicon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 sm:w-8 md:w-16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>

                                }
                                content={labs.length}
                                linkPath={"/labtable"}
                            />


                            <Card
                                CardClass={" "}
                                TopicClass={""}
                                topic={"Equipments"}
                                svgicon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 sm:w-8 md:w-16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                </svg>
                                }
                                content={equipmentTypes.length}
                                linkPath={"/labequipmenttypetable"}
                            />
                            <Card
                                CardClass={""}
                                TopicClass={""}
                                topic={"Repaires"}
                                svgicon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 sm:w-8 md:w-16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                                }
                                content={equipmentTypes.length}
                            />





                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 my-4  md:px-10 gap-y-2 gap-x-[2px] ">
                            <EquipmentCard
                                EquipmetsClass={" "}
                                EquipmentsQuantity={" "}
                                EquipmentsName={" "}
                                equipmentQuantity={machines.length}
                                equipmentName={"Machines"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={printers.length}
                                equipmentName={"Printers"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={scaners.length}
                                equipmentName={"Scaners"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={monitors.length}
                                equipmentName={"Monitors"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={upss.length}
                                equipmentName={"UPS"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={cables.length}
                                equipmentName={"Cables"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={keyboards.length}
                                equipmentName={"Keyboards"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={mics.length}
                                equipmentName={"Mics"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={mouses.length}
                                equipmentName={"Mouses"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={projectors.length}
                                equipmentName={"Projectors"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={laps.length}
                                equipmentName={"Laps"}
                            />
                            <EquipmentCard
                                EquipmetsClass={""}
                                EquipmentsQuantity={" "}
                                EquipmentsName={""}
                                equipmentQuantity={machines.length}
                                equipmentName={"Machines"}
                            />


                        </div>
                        <div className="flex divide-x divide-red-600">
                            <div className="w-1/2 p-4">Left Section</div>
                            <div className="w-1/2 p-4">Right Section</div>
                        </div>
                        <div className="flex flex-col divide-y divide-red-600">
                            <div className="w-1/2 p-4">Left Section</div>
                            <div className="w-1/2 p-4">Right Section</div>
                        </div>

                    </div>
                </main>
            </div>

        </>
    );
};
export default LabDashboard 