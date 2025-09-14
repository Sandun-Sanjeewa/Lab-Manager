import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import Modal from "../../../components/Model";
import CreateMouse from "./CreateMouse";
import EditMouse from "./EditMouse";
import { deleteMouse } from "../../../services/equipment/mouseServices";


const MouseTable = () => {
    const { mouses, fetchEquipment, loading: MouseLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedMouse, setSelectedMouse] = useState(null);

    const handleEdit = (mouse) => {
        setSelectedMouse(mouse);
        setIsEditOpen(true);
    };

    const handleDelete = (mouse) => {
        setSelectedMouse(mouse);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedMouse) return;
        await deleteMouse(selectedMouse._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedMouse(null);
    };
    const mouseColumns = [
        { key: "mouseID", label: "Mouse ID" },
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
                    Create Mouse
                </button>
            </div>
            <EquipmentTable
                data={mouses}
                columns={mouseColumns}
                loading={MouseLoading}
                title="Mouses"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Mouse">
                <CreateMouse onClose={() => setIsCreateOpen(false)} onMouseCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Mouse">
                {selectedMouse && (
                    <EditMouse
                        mouse={selectedMouse}
                        onClose={() => setIsEditOpen(false)}
                        onMouseUpdated={fetchEquipment}
                    />
                )}
            </Modal>

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedMouse?.mouseID}</span> ?
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

export default MouseTable;