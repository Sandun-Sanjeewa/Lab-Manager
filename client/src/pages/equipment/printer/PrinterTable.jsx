import { useState } from "react";
import EquipmentTable from "../../../components/EquipmentTable";
import { useEquipment } from "../../../context/equipmentContext/EquipmentContext";
import Modal from "../../../components/Model";
import CreatePrinter from "./CreatePrinter";
import { deletePrinter } from "../../../services/equipment/printerServices";
import EditPrinter from "./EditPrinter";


const PrinterTable = () => {
    const { printers, fetchEquipment, loading: PrinterLoading } = useEquipment();
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedPrinter, setSelectedPrinter] = useState(null);

    const handleEdit = (printer) => {
        setSelectedPrinter(printer);
        setIsEditOpen(true);
    };

    const handleDelete = (printer) => {
        setSelectedPrinter(printer);
        setIsDeleteOpen(true);
    };
    const confirmDelete = async () => {
        if (!selectedPrinter) return;
        await deletePrinter(selectedPrinter._id);
        fetchEquipment();
        setIsDeleteOpen(false);
        setSelectedPrinter(null);
    };
    const printerColumns = [
        { key: "printerID", label: "Printer ID" },
        { key: "lab", label: "Lab", render: (item) => item.lab?.labname },
        { key: "brand", label: "Brand" },
        { key: "status", label: "Status" },
        { key: "addDate", label: "Add Date", render: (item) => new Date(item.addDate).toLocaleDateString() },
        { key: "printerType", label: "Printer Type", render: (item) => item.specs?.printerType },
        { key: "colorSupport", label: "Color Support", render: (item) => item.specs?.colorSupport },
        { key: "maxResolution", label: "Max Resolution", render: (item) => item.specs?.maxResolution }
    ];
    return (

        <>
            <div className="ml-4 mt-2">
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="p-2 border border-gray-800 rounded"
                >
                    Create Printer
                </button>
            </div>
            <EquipmentTable
                data={printers}
                columns={printerColumns}
                loading={PrinterLoading}
                title="Printers"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Printer">
                <CreatePrinter onClose={() => setIsCreateOpen(false)} onPrinterCreated={fetchEquipment} />
            </Modal>

            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Printer">
                {selectedPrinter && (
                    <EditPrinter
                        printer={selectedPrinter}
                        onClose={() => setIsEditOpen(false)}
                        onPrinterUpdated={fetchEquipment}
                    />
                )}
            </Modal>
            

            <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="">
                <h3 className="text-lg font-bold mb-4 text-gray-200">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{selectedPrinter?.printerID}</span> ?
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

export default PrinterTable;