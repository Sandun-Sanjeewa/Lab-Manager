import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import Modal from "../../../components/Model";
import { deleteCable } from "../../../services/equipment/cableServices";
import CreateCable from "./CreateCable";
import Editcable from "./EditCable";



const CableTable = () => {
    const {cables, fetchEquipment, loading: CablesLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedCable, setSelectedCable] = useState(null);

    const handleEdit = (cable) => {
        setSelectedCable(cable);
        setIsEditOpen(true);
    };

    const handleDelete = (cable) => {
        setSelectedCable(cable);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedCable) return;
        await deleteCable(selectedCable._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedCable(null);
    };
    const cableColumns = [
        { key: "cableID", label: "Cable ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "type", label: "Type", render: (item) => item.specs?.type },
        { key: "length", label: "Length", render: (item) => item.specs?.length },
        
    ];
    return (

        <>
            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create cable
                </button>
            </div>
            <EquipmentTable
                data={cables}
                columns={cableColumns}
                loading={CablesLoading}
                title="cables"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create cable">
                <CreateCable onClose={() => setIsCreateOpen(false)} onCableCreated={fetchEquipment} />
            </Modal>
            
            

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit cable">
                {selectedCable && (
                    <Editcable
                        cable={selectedCable}
                        onClose={() => setIsEditOpen(false)}
                        onCableUpdated={fetchEquipment}
                    />
                )}
            </Modal>
            

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedCable?.cableID}</span> ?
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

export default CableTable;