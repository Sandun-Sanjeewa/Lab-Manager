import { useState } from "react";
import Modal from "../../components/Model";
import CreateLabForm from "./LabCreateForm";
import LabDelete from "./LabDelete";
import LabUpdateForm from "./LabUpdateForm";
import { useLabs } from "../../context/LabContext";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

const LabTable = () => {
  const { labs, fetchLabs, loading: labsLoading } = useLabs();

  const [isCreateLabOpen, setIsCreateLab] = useState(false);
  const [editingLabOpen, setEditingLabOpen] = useState(false);
  const [editingLabData, setEditingLabData] = useState(null);
  const [selectedLab, setSelectedLab] = useState(false);
  const [labToDelete, setLabToDelete] = useState(null);

  const handleEditClick = (lab) => {
    setEditingLabData(lab);
    setEditingLabOpen(true);
  };

  const deleteLabHandle = async (lab) => {
    setLabToDelete(lab);
    setSelectedLab(true);
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Laboratory Management
        </h2>
        <button
          onClick={() => setIsCreateLab(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          <PlusCircle size={18} />
          Create Lab
        </button>
      </div>

      <Modal isOpen={isCreateLabOpen} onClose={() => setIsCreateLab(false)} title="Create New Lab">
        <CreateLabForm onClose={() => setIsCreateLab(false)} onLabCreated={fetchLabs} />
      </Modal>

      {labsLoading ? (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-10 animate-pulse">
          Loading labs...
        </p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-gray-50 dark:bg-gray-700/40">
              <tr className="text-gray-700 dark:text-gray-300 text-sm">
                <th className="p-3 border-b">Actions</th>
                <th className="p-3 border-b">Lab Name</th>
                <th className="p-3 border-b">Location</th>
                <th className="p-3 border-b">Assistant Name</th>
                <th className="p-3 border-b">Assistant Email</th>
              </tr>
            </thead>
            <tbody>
              {labs.map((lab) => (
                <tr
                  key={lab._id}
                  className="hover:bg-blue-50 dark:hover:bg-gray-700/30 transition-colors text-gray-800 dark:text-gray-100"
                >
                  <td className="p-3 flex gap-3 items-center justify-center">
                    <button
                      onClick={() => handleEditClick(lab)}
                      className="p-2 rounded-lg bg-green-400 hover:bg-green-600 text-white shadow-md hover:scale-105 transition"
                    >
                      <Edit size={16} />
                    </button>

                    <Modal
                      isOpen={editingLabOpen}
                      onClose={() => setEditingLabOpen(false)}
                    >
                      <LabUpdateForm
                        lab={editingLabData}
                        onClose={() => setEditingLabOpen(false)}
                        onLabUpdated={fetchLabs}
                      />
                    </Modal>

                    <button
                      onClick={() => deleteLabHandle(lab)}
                      className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:scale-105 transition"
                    >
                      <Trash2 size={16} />
                    </button>

                    <Modal isOpen={selectedLab} onClose={() => setSelectedLab(false)}>
                      <LabDelete
                        lab={labToDelete}
                        onClose={() => setSelectedLab(false)}
                        onLabDelete={fetchLabs}
                      />
                    </Modal>
                  </td>

                  <td className="p-3 border-b font-medium">{lab.labname}</td>
                  <td className="p-3 border-b">{lab.location}</td>
                  <td className="p-3 border-b">{lab.assistant?.name || "N/A"}</td>
                  <td className="p-3 border-b">{lab.assistant?.email || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-right text-gray-700 dark:text-gray-300 text-sm">
        Total Labs: <span className="font-semibold">{labs.length}</span>
      </div>
    </div>
  );
};

export default LabTable;
