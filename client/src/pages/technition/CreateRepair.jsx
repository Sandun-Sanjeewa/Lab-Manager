import { useState } from "react";
import { toast } from "react-toastify";
import { createRepair } from "../../services/repairServices";


const CreateRepairForm = ({ onClose, onRepairCreated, equipmentList, userId }) => {
  const [formData, setFormData] = useState({
    equipment: "",
    issueDescription: "",
    reportedBy: userId || "",
    assignedTechnician: "",
    repairStatus: "Pending",
    repairNotes: "",
    cost: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.equipment || !formData.issueDescription) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      setLoading(true);
      const response = await createRepair(formData);
      toast.success("Repair created successfully!");
      onRepairCreated(response.data);
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to create repair");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Create Repair Request
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Equipment <span className="text-red-500">*</span>
          </label>
          <select
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <option value="">Select Equipment</option>
            {equipmentList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name || item.equipmentName || "Unnamed Equipment"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Issue Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="issueDescription"
            value={formData.issueDescription}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Assigned Technician (optional)
          </label>
          <input
            type="text"
            name="assignedTechnician"
            value={formData.assignedTechnician}
            onChange={handleChange}
            placeholder="Technician ID or Name"
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Repair Notes
          </label>
          <textarea
            name="repairNotes"
            value={formData.repairNotes}
            onChange={handleChange}
            rows={2}
            className="w-full px-3 py-2 border rounded-lg resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Estimated Cost (LKR)
          </label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            min="0"
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        <div className="flex justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Create Repair"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRepairForm;
