import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import Modal from "../../../components/Model";
import CreateLap from "./CreateLap";
import { deleteLap } from "../../../services/equipment/lapServices";
import EditLap from "./EditLap";


const LapTable = () => {
    const { laps, fetchEquipment, loading: LapLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedLap, setSelectedLap] = useState(null);

    const handleEdit = (lap) => {
        setSelectedLap(lap);
        setIsEditOpen(true);
    };

    const handleDelete = (lap) => {
        setSelectedLap(lap);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedLap) return;
        await deleteLap(selectedLap._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedLap(null);
    };
    const lapColumns = [
        { key: "lapID", label: "lap ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "Status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "os", label: "lap Type", render: (item) => item.specs?.os },
        { key: "ram", label: "RAM", render: (item) => item.specs?.ram },
        { key: "processor", label: "processor", render: (item) => item.specs?.processor },
        { key: "storage", label: "Storage", render: (item) => item.specs?.storage },
        { key: "batteryHealth", label: "batteryHealth", render: (item) => item.specs?.batteryHealth }

    ];
    return (

        <>
            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create lap
                </button>
            </div>
            <EquipmentTable
                data={laps}
                columns={lapColumns}
                loading={LapLoading}
                title="Laps"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Lap">
                <CreateLap onClose={() => setIsCreateOpen(false)} onLapCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit lap">
                {selectedLap && (
                    <EditLap
                        lap={selectedLap}
                        onClose={() => setIsEditOpen(false)}
                        onLapUpdated={fetchEquipment}
                    />
                )}
            </Modal>


            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete lap">

                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedLap?.lapID}</span> ?
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

export default LapTable;