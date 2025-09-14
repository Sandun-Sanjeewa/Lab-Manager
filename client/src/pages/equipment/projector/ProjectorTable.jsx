import { useState } from "react";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import EquipmentTable from "../../../components/EquipmentTable";
import CreateProjector from "./CreateProjector";
import Modal from "../../../components/Model";
import { deleteProjector } from "../../../services/equipment/projectorServices";
import EditProjector from "./EditProjector";


const ProjectorTable = () => {
    const { projectors, fetchEquipment, loading: ProjectorsLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedProjector, setSelectedProjector] = useState(null);

    const handleEdit = (projector) => {
        setSelectedProjector(projector);
        setIsEditOpen(true);
    };

    const handleDelete = (projector) => {
        setSelectedProjector(projector);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedProjector) return;
        await deleteProjector(selectedProjector._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedProjector(null);
    };

    const projectorColumns = [
        { key: "projectorID", label: "Projector ID" },
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
                    Create Projector
                </button>
            </div>

            <EquipmentTable
                data={projectors}
                columns={projectorColumns}
                loading={ProjectorsLoading}
                title="Projectors"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Keyboard">
                <CreateProjector onClose={() => setIsCreateOpen(false)} onProjectorCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Projector">
                {selectedProjector && (
                    <EditProjector
                        projector={selectedProjector}
                        onClose={() => setIsEditOpen(false)}
                        onProjectorUpdated={fetchEquipment}
                    />
                )}
            </Modal>
            

             <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedProjector?.projectorID}</span> ?
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
export default ProjectorTable;