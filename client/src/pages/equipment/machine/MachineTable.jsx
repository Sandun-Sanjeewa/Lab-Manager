import { useEffect, useState } from "react";
import { getAllMachines } from "../../../services/equipment/machineServices";

// import { useMachine } from "../../../context/equipmentContext/MachineContext";
import Modal from "../../../components/Model.jsx";
import CreateMachine from "./CreateMachine.jsx";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext.jsx";

const MachineTable = () => {
    const { machines,fetchEquipment,loadng: machinesLoading} = useEquipment();
    // const { machines, fetchMachines, loadng: machinesLoading } = useMachine();
    const [isCreatedMachineOpen, setIsCreatedMachineOpen] = useState(false);

    // const [machines, setMachines] = useState([]);
    //const [loadng, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchMachines();
    // }, []);

    // const fetchMachines = async () => {
    //     try {
    //         const res = await getAllMachines();
    //         setMachines(res.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         setLoading(false);
    //         toast.error("Faild to fetch Machines");
    //     }
    // };
    return (
        <>
            <div className="w-full h-full">
                {machinesLoading ? (<p>Loading Machines</p>) : (
                    <>
                        <div className="ml-4 mt-2">
                            <button onClick={() => setIsCreatedMachineOpen(true)} className="p-2 border-gray-800 border-2 text-gary-800 rounded-sm">Create Machine</button>
                            <Modal
                                isOpen={isCreatedMachineOpen}
                                onClose={() => setIsCreatedMachineOpen(false)}
                                title=""
                            >
                                <CreateMachine onClose={() => setIsCreatedMachineOpen(false)} onMachineCreated={fetchEquipment} />
                            </Modal>
                        </div>
                        <div className="pt-4">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead>
                                    <tr>

                                        <th className="p-2 border">MachineID</th>
                                        <th className="p-2 border">Lab</th>
                                        <th className="p-2 border">Brand</th>
                                        <th className="p-2 border">Status</th>
                                        <th className="p-2 border">Add Date</th>
                                        <th className="p-2 border">OS</th>
                                        <th className="p-2 border">RAM</th>
                                        <th className="p-2 border">Processor</th>
                                        <th className="p-2 border">Storage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {machines.map((machine) => (
                                        <tr key={machine._id} className="align-middle">
                                            <td className="p-2 border">{machine.machineID}</td>
                                            <td className="p-2 border">{machine.lab?.labname}</td>
                                            <td className="p-2 border">{machine.brand}</td>
                                            <td className="p-2 border">{machine.status}</td>
                                            <td className="p-2 border">
                                                {new Date(machine.addDate).toLocaleDateString()}
                                            </td>
                                            <td className="p-2 border">{machine.specs?.os}</td>
                                            <td className="p-2 border">{machine.specs?.ram}</td>
                                            <td className="p-2 border">{machine.specs?.processor}</td>
                                            <td className="p-2 border">{machine.specs?.storage}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default MachineTable;