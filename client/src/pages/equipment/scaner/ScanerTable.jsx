import { useState } from "react";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import EquipmentTable from "../../../components/EquipmentTable";

import Modal from "../../../components/Model";
import CreateScaner from "./CreateScaner";
import { deleteScaner } from "../../../services/equipment/scanerServices";
import EditScaner from "./EditScaner";


const ScanerTable = () => {
    const { scaners, fetchEquipment, loading: ScanersLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedScaner, setSelectedScaner] = useState(null);

    const handleEdit = (scaner) => {
        setSelectedScaner(scaner);
        setIsEditOpen(true);
    };

    const handleDelete = (scaner) => {
        setSelectedScaner(scaner);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedScaner) return;
        await deleteScaner(selectedScaner._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedScaner(null);
    };

    const scanerColumns = [
        { key: "scanerID", label: "Scaner ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "connectivity", label: "Connectivity", render: (item) => item.specs?.connectivity },
        { key: " resolution", label: " Resolution", render: (item) => item.specs?.resolution }
    ];

    return (
        <>
            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create Scaner
                </button>
            </div>

            <EquipmentTable
                data={scaners}
                columns={scanerColumns}
                loading={ScanersLoading}
                title="Scaners"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Scaner">
                <CreateScaner onClose={() => setIsCreateOpen(false)} onScanerCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Scaner">
                {selectedScaner && (
                    <EditScaner
                        scaner={selectedScaner}
                        onClose={() => setIsEditOpen(false)}
                        onScanerUpdated={fetchEquipment}
                    />
                )}
            </Modal>

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedScaner?.scanerID}</span> ?
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
export default ScanerTable;