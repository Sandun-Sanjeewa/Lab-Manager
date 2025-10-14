import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../components/Model";
import CreateEquipmentType from "./CreateEquipmentType";
import UpdateEquipmentType from "./UpdateEquipmentType";
import DeleteEquipmentType from "./DeleteEquipmentType";
import { useEquipmentType } from "../../context/equipmentContext/EquipmentTypeContext";
import { useEquipment } from "../../context/equipmentContext/EquipmentContext";
import { PlusCircle, Edit, Trash2, Wrench } from "lucide-react";

const EquipmentTypeTable = () => {
  const { equipmentTypes, fetchEquipmentTypes, loading: equipmentsLoading } =
    useEquipmentType();
  const {
    machines,
    printers,
    scaners,
    monitors,
    upss,
    cables,
    keyboards,
    mics,
    mouses,
    projectors,
    laps,
  } = useEquipment();

  const [tokenReady, setTokenReady] = useState(false);
  const [createEquipmentType, setCreateEquipmentType] = useState(false);
  const [editingEquipmentType, setEditingEquipmentType] = useState(null);
  const [equipmentTypeToDelete, setEquipmentTypeToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenReady(true);
    } else {
      toast.error("You are not logged in");
    }
  }, []);

  useEffect(() => {
    if (tokenReady) {
      fetchEquipmentTypes();
    }
  }, [tokenReady]);

  const handleEditClick = (equipmentType) => {
    setEditingEquipmentType(equipmentType);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (equipmentType) => {
    setEquipmentTypeToDelete(equipmentType);
    setIsDeleteModalOpen(true);
  };

  const getEquipmentCount = (type) => {
    if (!type) return "N/A";
    switch (type.toLowerCase()) {
      case "machine":
        return machines.length;
      case "monitor":
        return monitors.length;
      case "ups":
        return upss.length;
      case "lap":
        return laps.length;
      case "printer":
        return printers.length;
      case "keyboard":
        return keyboards.length;
      case "mouse":
        return mouses.length;
      case "mic":
        return mics.length;
      case "cable":
        return cables.length;
      case "scaner":
        return scaners.length;
      case "projector":
        return projectors.length;
      default:
        return "N/A";
    }
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all">
      <div className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-100">
         
          Equipment Type Management
        </h2>
        <button
          onClick={() => setCreateEquipmentType(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
        >
          <PlusCircle size={18} />
          New Equipment Type
        </button>
      </div>

      <Modal
        isOpen={createEquipmentType}
        onClose={() => setCreateEquipmentType(false)}
      >
        <CreateEquipmentType
          onClose={() => setCreateEquipmentType(false)}
          onEquipmentTypeCreated={fetchEquipmentTypes}
        />
      </Modal>

      {equipmentsLoading ? (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-10 animate-pulse">
          Loading equipment types...
        </p>
      ) : (
        <>
          <div className="overflow-x-auto bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <table className="min-w-full table-auto text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/40">
                <tr className="text-gray-700 dark:text-gray-300 text-sm">
                  <th className="p-3 border-b">Actions</th>
                  <th className="p-3 border-b">Equipment Type</th>
                  <th className="p-3 border-b">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {equipmentTypes.map((equipmentType) => (
                  <tr
                    key={equipmentType._id}
                    className="hover:bg-blue-50 dark:hover:bg-gray-700/30 transition-colors text-gray-800 dark:text-gray-100"
                  >
                    <td className="p-3 flex gap-3 items-center justify-center border-b">
                      <button
                        onClick={() => handleEditClick(equipmentType)}
                        className="p-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white shadow-md hover:scale-105 transition"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(equipmentType)}
                        className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:scale-105 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                    <td className="p-3 border-b font-medium">
                      {equipmentType.equipmenttype}
                    </td>
                    <td className="p-3 border-b font-medium">
                      {getEquipmentCount(equipmentType.equipmenttype)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-right text-gray-700 dark:text-gray-300 text-sm">
            Total Equipment Types:{" "}
            <span className="font-semibold">{equipmentTypes.length}</span>
          </div>
        </>
      )}

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <UpdateEquipmentType
          equipmentType={editingEquipmentType}
          onClose={() => setIsEditModalOpen(false)}
          onEquipmentTypeUpdated={fetchEquipmentTypes}
        />
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <DeleteEquipmentType
          equipmentType={equipmentTypeToDelete}
          onClose={() => setIsDeleteModalOpen(false)}
          onEquipmentTypeDelete={fetchEquipmentTypes}
        />
      </Modal>
    </div>
  );
};

export default EquipmentTypeTable;
