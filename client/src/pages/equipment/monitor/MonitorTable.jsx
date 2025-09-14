import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import CreateMonitor from "./CreateMonitor";
import Modal from "../../../components/Model";
import { deleteMonitor } from "../../../services/equipment/monitorServices";
import { toast } from "react-toastify";
import EditMonitor from "./EditMonitor";

const MonitorTable = () => {
    const { monitors, fetchEquipment, loading: MonitorLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedMonitor, setSelectedMonitor] = useState(null);

    const handleEdit = (monitor) => {
        setSelectedMonitor(monitor);
        setIsEditOpen(true);
    };
    const handleDelete = (monitor) => {
        console.log(monitor);
        setSelectedMonitor(monitor);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedMonitor) return;
        await deleteMonitor(selectedMonitor._id);
        toast.success("Monitor Delete Successfully");
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedMonitor(null);
    };
    const monitorColumns = [
        { key: "monitorID", label: "Monitor ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "resolution", label: "Resolution", render: (item) => item.specs?.resolution },
        { key: "size", label: "Size", render: (item) => item.specs?.size },
        { key: " refreshRate", label: " refreshRate", render: (item) => item.specs?. refreshRate }
    ];
    return (

        <>
            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create Monitor
                </button>
            </div>
            <EquipmentTable
                data={monitors}
                columns={monitorColumns}
                loading={MonitorLoading}
                title="Monitors"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Monitor">
                <CreateMonitor onClose={() => setIsCreateOpen(false)} onMonitorCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Monitor">
                {selectedMonitor && (
                    <EditMonitor
                        monitor={selectedMonitor}
                        onClose={() => setIsEditOpen(false)}
                        onMonitorUpdated={fetchEquipment}
                    />
                )}
            </Modal>
            

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                 <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedMonitor?.monitorID}</span> ?
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

export default MonitorTable;