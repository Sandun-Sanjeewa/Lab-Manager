import { useState } from "react";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import EquipmentTable from "../../../components/EquipmentTable";
import CreateUps from "./CreateUps";
import Modal from "../../../components/Model";
import { deleteUps } from "../../../services/equipment/upsServices";
import EditUps from "./EditUps";

const UpsTable = () => {
    const { upss, fetchEquipment, loading: UpsLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedUps, setSelectedUps] = useState(null);

    const handleEdit = (ups) => {
        setSelectedUps(ups);
        setIsEditOpen(true);
    };

    const handleDelete = (ups) => {
        setSelectedUps(ups);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedUps) return;
        await deleteUps(selectedUps._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedUps(null);
    };

    const upsColumns = [
        { key: "upsID", label: "ups ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "capacity", label: "Capacity", render: (item) => item.specs?.capacity },
        { key: " batteryHealth", label: " BatteryHealth", render: (item) => item.specs?.batteryHealth }
    ];

    return (
        <>

            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create Ups
                </button>
            </div>

            <EquipmentTable
                data={upss}
                columns={upsColumns}
                loading={UpsLoading}
                title="UPS"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Ups">
                <CreateUps onClose={() => setIsCreateOpen(false)} onUpsCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Ups">
                {selectedUps && (
                    <EditUps
                        ups={selectedUps}
                        onClose={() => setIsEditOpen(false)}
                        onUpsUpdated={fetchEquipment}
                    />
                )}
            </Modal>
            

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedUps?.upsID}</span> ?
                </h3>

                <div className="flex justify-end gap-2 my-4 ">
                    <button
                        onClick={() => setIsDeleteOpen(false)}
                        className="px-3 py-1 bg-gray-300 rounded "
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
export default UpsTable;