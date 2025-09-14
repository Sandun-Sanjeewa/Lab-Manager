import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import Modal from "../../../components/Model";
import CreateMachine from "./CreateMachine";
import { deleteMachine } from "../../../services/equipment/machineServices";
import EditMachine from "./EditMachine";



const MachineTable = () => {
    const { machines, fetchEquipment, loading: MachineLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const handleEdit = (machine) => {
        setSelectedMachine(machine);
        setIsEditOpen(true);
    };

    const handleDelete = (machine) => {
        setSelectedMachine(machine);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedMachine) return;
       await deleteMachine(selectedMachine._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedMachine(null);
    };
    const machineColumns = [
        { key: "machineID", label: "machine ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "Status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "os", label: "OS", render: (item) => item.specs?.os },
        { key: "ram", label: "RAM", render: (item) => item.specs?.ram },
        { key: "processor", label: "processor", render: (item) => item.specs?.processor },
        { key: "storage", label: "Storage", render: (item) => item.specs?.storage },

    ];
    return (

        <>
            <div className="mb-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create Machine
                </button>
            </div>
            <EquipmentTable
                data={machines}
                columns={machineColumns}
                loading={MachineLoading}
                title="Machines"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create machine">
                <CreateMachine onClose={() => setIsCreateOpen(false)}  onMachineCreated={fetchEquipment} />
            </Modal>
            
            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Machine">
                {selectedMachine && (
                    <EditMachine
                    machine={selectedMachine}
                    onClose={()=>setIsEditOpen(false)}
                    onMachineUpdated={fetchEquipment}
                    />
                )}
            </Modal>
            

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete lap">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedMachine?.machineID}</span> ?
                </h3>
                <div className="flex justify-end gap-2 my-4">
                    <button
                        onClick={() => setIsDeleteOpen(false)}
                        className="px-3 py-1 bg-gray-300 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmDelete}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                        Delete
                    </button>
                </div>
            </Modal>
        </>

    );
};

export default MachineTable;