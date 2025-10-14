import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useEquipmentType } from "../../context/equipmentContext/EquipmentTypeContext";
import { useEquipment } from "../../context/equipmentContext/EquipmentContext";
import { useLabs } from "../../context/LabContext";
import { createRepair } from "../../services/repairServices";
import {jwtDecode} from "jwt-decode";

const CreateRepairForm = ({ onClose, onRepairCreated }) => {
  const { labs } = useLabs();
  const { equipmentTypes } = useEquipmentType();
  const { machines, monitors, printers, scaners, upss, cables, keyboards, mics, mouses, projectors, laps } = useEquipment();

  const [reportedUserId, setReportedUserId] = useState("");
  const [filteredEquipment, setFilteredEquipment] = useState([]);

  const [createRepairData, setCreateRepairData] = useState({
    lab: "",
    equipmentType: "",
    equipment: "",
    issueDescription: "",
    assignedTechnician: "",
    repairStatus: "Pending",
    reportedDate: new Date().toISOString().split("T")[0],
    repairStartDate: "",
    repairEndDate: "",
    repairNotes: "",
    cost: 0,
  });

  const [error, setError] = useState({ general: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setReportedUserId(decoded.id);
      } catch {
        console.error("Invalid token");
      }
    }
  }, []);

 useEffect(() => {
  if (!createRepairData.lab || !createRepairData.equipmentType) {
    setFilteredEquipment([]);
    return;
  }

  let allEquipment = [];
  switch (createRepairData.equipmentType) {
    case "Machine": allEquipment = machines; break;
    case "Monitor": allEquipment = monitors; break;
    case "UPS": allEquipment = upss; break;
    case "Printer": allEquipment = printers; break;
    case "Scaner": allEquipment = scaners; break;
    case "Cable": allEquipment = cables; break;
    case "Keyboard": allEquipment = keyboards; break;
    case "Mouse": allEquipment = mouses; break;
    case "Mic": allEquipment = mics; break;
    case "Projector": allEquipment = projectors; break;
    case "Lap": allEquipment = laps; break;
    default: allEquipment = [];
  }

  const filtered = allEquipment.filter(eq =>
    (eq.lab?._id?.toString() === createRepairData.lab) || (eq.lab?.toString() === createRepairData.lab)
  );

  setFilteredEquipment(filtered);
  setCreateRepairData(prev => ({ ...prev, equipment: "" }));
}, [
  createRepairData.lab,
  createRepairData.equipmentType,
  machines, monitors, printers, scaners, upss, cables, keyboards, mics, mouses, projectors, laps
]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateRepairData(prev => ({ ...prev, [name]: value }));
    setError({ general: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const repairPayload = {
        ...createRepairData,
        reportedBy: reportedUserId,
        assignedTechnician: createRepairData.assignedTechnician || null,
      };
      await createRepair(repairPayload);
      toast.success("Repair submitted successfully");
      setCreateRepairData({
        lab: "",
        equipmentType: "",
        equipment: "",
        issueDescription: "",
        assignedTechnician: "",
        repairStatus: "Pending",
        reportedDate: new Date().toISOString().split("T")[0],
        repairStartDate: "",
        repairEndDate: "",
        repairNotes: "",
        cost: 0,
      });
      if (onRepairCreated) onRepairCreated();
      if (onClose) onClose();
    } catch (err) {
      setError({ general: err.response?.data?.error || "Repair submitting failed" });
      toast.error("Failed to submit repair");
    }
  };

  const getEquipmentDisplayName = (eq) => {
    switch (eq.type) {
      case "Machine": return eq.machineID || eq._id;
      case "Monitor": return eq.monitorID || eq._id;
      case "UPS": return eq.upsID || eq._id;
      case "Lap": return eq.lapID || eq._id;
      case "Printer": return eq.printerID || eq._id;
      case "Keyboard": return eq.keyboardID || eq._id;
      case "Mouse": return eq.mouseID || eq._id;
      case "Mic": return eq.micID || eq._id;
      case "Cable": return eq.cableID || eq._id;
      case "Scaner": return eq.scanerID || eq._id;
      case "Projector": return eq.projectorID || eq._id;
      default: return eq._id;
    }
  };

  return (
    <div className="mb-6 bg-gray-900 text-white rounded-2xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Create Repair Request</h2>
      {error.general && <p className="text-red-400 text-sm text-center mb-3">{error.general}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 px-4">
        <div className="grid grid-cols-1 md:gap-6 sm:gap-4 gap-2">
          <div>
            <label className="block text-sm mb-1">Lab</label>
            <select
              name="lab"
              value={createRepairData.lab}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Lab</option>
              {labs.map(lab => (
                <option key={lab._id} value={lab._id}>{lab.labname}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Equipment Type</label>
            <select
              name="equipmentType"
              value={createRepairData.equipmentType}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!createRepairData.lab}
            >
              <option value="">Select Equipment Type</option>
              {equipmentTypes.map(eqType => (
                <option key={eqType._id} value={eqType.equipmenttype}>{eqType.equipmenttype}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Equipment</label>
            <select
              name="equipment"
              value={createRepairData.equipment}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={!createRepairData.lab || !createRepairData.equipmentType}
            >
              <option value="">Select Equipment</option>
              {filteredEquipment.map(eq => (
                <option key={eq._id} value={eq._id}>{getEquipmentDisplayName(eq)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Issue Description</label>
            <textarea
              name="issueDescription"
              value={createRepairData.issueDescription}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the issue..."
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 py-4">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
            Submit Repair
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRepairForm;
