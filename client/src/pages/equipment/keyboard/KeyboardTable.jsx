import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { deleteKeyboard } from "../../../services/equipment/KeyboardServices";
import CreateKeyboard from "./CreateKeyboard";
import Modal from "../../../components/Model";
import EditKeyboard from "./EditKeyboard";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";

const KeyboardTable = () => {
    const { keyboards, fetchEquipment, loading: KeyboardLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedKeyboard, setSelectedKeyboard] = useState(null);

    const handleEdit = (keyboard) => {
        setSelectedKeyboard(keyboard);
        setIsEditOpen(true);
    };

    const handleDelete = (keyboard) => {
        setSelectedKeyboard(keyboard);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedKeyboard) return;
        await deleteKeyboard(selectedKeyboard._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedKeyboard(null);
    };

    const keyboardColumns = [
        { key: "keyboardID", label: "Keyboard ID" },
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
                    Create Keyboard
                </button>
            </div>
            <EquipmentTable
                data={keyboards}
                columns={keyboardColumns}
                loading={KeyboardLoading}
                title="keyboards"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Keyboard">
                <CreateKeyboard onClose={() => setIsCreateOpen(false)} onKeyboardCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit keyboard">
                <EditKeyboard 
                keyboard={selectedKeyboard}
                onClose={()=>setIsEditOpen(false)}
                onKeyboardUpdated={fetchEquipment}
                 />
            </Modal>

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedKeyboard?.keyboardID}</span> ?
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
export default KeyboardTable;



