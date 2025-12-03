import { useState } from "react";
import EquipmentCard from "../../components/EquipmentCard";
import Dashboard from "../../containers/Dashboard";
import { useEquipment } from "../../context/equipmentContext/EquipmentContext";
import { useEquipmentType } from "../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../context/LabContext";
import { useUsers } from "../../context/UserContext";
import { Speaker, Mouse, Projector, Cable, PcCase, Monitor, Printer, Laptop, Keyboard, Mic, BatteryCharging, ScanLine, Users, Building, MonitorSpeaker, MonitorCog } from "lucide-react";
import { SlidersHorizontal } from 'lucide-react';

const LabEquipment = () => {
    const { labs, loading: labsLoading } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const { users } = useUsers();
    const { machines, printers, scaners, monitors, upss, cables, keyboards, mics, mouses, projectors, laps } = useEquipment();
    const [selectedLab, setSelectedLab] = useState("");
    const filteredMachines = selectedLab
        ? machines.filter((machine) => machine.labId === selectedLab)
        : machines;

    return (
        <>
            <Dashboard
                maincontent={
                    <>
                        <div>
                            <div className=" w-full h-[30px] md:h-[50px]  mb-2 text-gray-900 flex items-center bg-gray-100 rounded-md ">
                                <span className="text-xl md:text-2xl md:pl-10">Lab Equipment</span>
                            </div>
                            <div className=" w-full h-[30px] md:h-[50px]  mb-2 text-gray-900 flex items-center bg-gray-100 rounded-md px-4">
                                <SlidersHorizontal className="md:w-6 md:h-6 text-gray-800" strokeWidth={1.2} />
                                <div className="flex items-center px-2 ">
                                    <label className="font-semibold text-gray-800 ">
                                        Select Lab:
                                    </label>
                                    <select
                                        className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-100 "
                                        onChange={(e) => setSelectedLab(e.target.value)}
                                    >
                                        <option value="">All Labs</option>
                                        {labs.map((lab) => (
                                            <option key={lab._id} value={lab._id } className="text-gray-800">
                                                {lab.labName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 my-4  md:px-10 gap-y-2 gap-x-[2px] bg-gray-200">
                                <EquipmentCard
                                    equipmentsvgicon={<PcCase className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={machines.length}
                                    equipmentName={"Machines"}
                                    linkPath={""}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Printer className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={printers.length}
                                    equipmentName={"Printers"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<ScanLine className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={scaners.length}
                                    equipmentName={"Scaners"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Monitor className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={monitors.length}
                                    equipmentName={"Monitors"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<BatteryCharging className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={upss.length}
                                    equipmentName={"UPS"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Cable className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={cables.length}
                                    equipmentName={"Cables"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Keyboard className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={keyboards.length}
                                    equipmentName={"Keyboards"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={< Mic className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={mics.length}
                                    equipmentName={"Mics"}
                                />
                                <EquipmentCard

                                    equipmentsvgicon={<Mouse className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={mouses.length}
                                    equipmentName={"Mouses"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Projector className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}

                                    equipmentQuantity={projectors.length}
                                    equipmentName={"Projectors"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Laptop className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={laps.length}
                                    equipmentName={"Laps"}
                                />
                                <EquipmentCard
                                    equipmentsvgicon={<Speaker className="md:w-10 md:h-10 text-gray-900 group-hover:text-gray-100" strokeWidth={1} />}
                                    equipmentQuantity={machines.length}
                                    equipmentName={"Speakers"}
                                />
                            </div>


                        </div>
                    </>
                }
            />
        </>
    );
};
export default LabEquipment