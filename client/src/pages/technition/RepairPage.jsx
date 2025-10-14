import { useState } from "react";
import Modal from "../../components/Model";

import { useEquipment } from "../../context/equipmentContext/EquipmentContext";
import { Wrench } from "lucide-react";
import CreateRepairForm from "./CreateRepair";

const RepairPage = ({ userId }) => {
  const {
    machines,
    monitors,
    printers,
    keyboards,
    mouses,
    laps,
    cables,
    projectors,
    scaners,
    mics,
    upss,
  } = useEquipment();

  const equipmentList = [
    ...machines,
    ...monitors,
    ...printers,
    ...keyboards,
    ...mouses,
    ...laps,
    ...cables,
    ...projectors,
    ...scaners,
    ...mics,
    ...upss,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRepairCreated = (newRepair) => {
    console.log("New Repair Added:", newRepair);
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
      <div className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          <Wrench className="text-blue-600 dark:text-blue-400" />
          Repair Management
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md"
        >
          <Wrench size={18} />
          New Repair
        </button>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateRepairForm
          onClose={() => setIsModalOpen(false)}
          onRepairCreated={handleRepairCreated}
          equipmentList={equipmentList}
          userId={userId}
        />
      </Modal>
    </div>
  );
};

export default RepairPage;
