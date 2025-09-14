import { useState } from "react";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import EquipmentTable from "../../../components/EquipmentTable";
import Modal from "../../../components/Model";
import CreateMic from "./CreateMic";
import { deleteMic } from "../../../services/equipment/micServices";
import EditMic from "./EditMic";

const MicTable = () => {
    const { mics, fetchEquipment, loading: MicLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedMic, setSelectedMic] = useState(null);

    const handleEdit = (mic) => {
        setSelectedMic(mic);
        setIsEditOpen(true);
    };

    const handleDelete = (mic) => {
        setSelectedMic(mic);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedMic) return;
        await deleteMic(selectedMic._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedMic(null);
    };

    const micColumns = [
        { key: "micID", label: "Mic ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "connectivity", label: "Connectivity", render: (item) => item.specs?.connectivity },
        { key: "type", label: "Type", render: (item) => item.specs?.type }
    ];

    return (
        <>
            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create Mic
                </button>
            </div>
            <EquipmentTable
                data={mics}
                columns={micColumns}
                loading={MicLoading}
                title="Mics"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Mic">
                <CreateMic onClose={() => setIsCreateOpen(false)} onMicCreated={fetchEquipment} />
            </Modal>

               <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit cable">
                {selectedMic && (
                    <EditMic
                        mic={selectedMic}
                        onClose={() => setIsEditOpen(false)}
                        onMicUpdated={fetchEquipment}
                    />
                )}
            </Modal>

             <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedMic?.micID}</span> ?
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
export default MicTable;