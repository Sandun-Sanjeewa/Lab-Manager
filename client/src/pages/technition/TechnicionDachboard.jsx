import { useEffect, useState } from "react";
import { Wrench, Clock, CheckCircle2, XCircle, Loader2, Trash2, Edit3 } from "lucide-react";
import Dashboard from "../../containers/Dashboard";
import { deleteRepair, getAllRepairs, updateRepair } from "../../services/repairServices";
import RepairButton from "./RepairButton";
import { useRepair } from "../../context/RepairContext";


const statusColors = {
  Pending: "bg-yellow-200 text-yellow-800",
  "In Progress": "bg-blue-200 text-blue-800",
  Completed: "bg-green-200 text-green-800",
  Unrepairable: "bg-red-200 text-red-800",
};

const TechnicianDashboard = () => {
 const {repairs,setRepairs,fetchRepairs,loading} =  useRepair();
 
  const [updatingId, setUpdatingId] = useState(null);


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this repair record?")) {
      await deleteRepair(id);
      setRepairs(repairs.filter((r) => r._id !== id));
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await updateRepair(id, { repairStatus: newStatus });
      fetchRepairs();
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  const renderStatusButton = (repair) => {
    const statuses = ["Pending", "In Progress", "Completed", "Unrepairable"];
    return (
      <select
        className="p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring focus:ring-blue-400"
        value={repair.repairStatus}
        onChange={(e) => handleStatusChange(repair._id, e.target.value)}
        disabled={updatingId === repair._id}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    );
  };

  return (
    <Dashboard
      maincontent={
        <> 
        <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Equipment Repair Dashboard
            </h1>
          </div>
          <div>
            <RepairButton/>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
            </div>
          ) : repairs.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-300">
              No repair records found.
            </div>
          ) : (
            <div className="overflow-x-auto shadow-md rounded-2xl bg-white dark:bg-gray-800">
              <table className="min-w-full text-sm text-gray-700 dark:text-gray-300">
                <thead className="bg-gray-100 dark:bg-gray-700 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3 text-left">EquipmentType</th>
                    <th className="px-4 py-3 text-left">EquipmentID</th>
                    <th className="px-4 py-3 text-left">Issue</th>
                    <th className="px-4 py-3 text-left">Reported By</th>
                    <th className="px-4 py-3 text-left">Technician</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Reported Date</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {repairs.map((repair) => (
                    <tr
                      key={repair._id}
                      className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      <td className="px-4 py-3">
                        {repair.equipment?.type || "N/A"}
                      </td>
                      <td className="px-4 py-3">
                        {(() => {
                          const eq = repair.equipment;
                          if (!eq) return "N/A";
                          switch (eq.type) {
                            case "Machine": return eq.machineID;
                            case "Monitor": return eq.monitorID;
                            case "UPS": return eq.upsID;
                            case "Lap": return eq.lapID;
                            case "Printer": return eq.printerID;
                            case "Keyboard": return eq.keyboardID;
                            case "Mouse": return eq.mouseID;
                            case "Mic": return eq.micID;
                            case "Cable": return eq.cableID;
                            case "Scaner": return eq.scanerID;
                            case "Projector": return eq.projectorID;
                            default: return eq._id;
                          }
                        })()}
                      </td>
                      <td className="px-4 py-3">{repair.issueDescription}</td>
                      <td className="px-4 py-3">
                        {repair.reportedBy?.name || "Unknown"}
                      </td>
                      <td className="px-4 py-3">
                        {repair.assignedTechnician?.username || "Unassigned"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[repair.repairStatus]}`}
                        >
                          {repair.repairStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {new Date(repair.reportedDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-center space-x-2">
                        {renderStatusButton(repair)}
                        <button
                          onClick={() => handleDelete(repair._id)}
                          className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}


        </div>
       

        </>
      }
    />
  );
};

export default TechnicianDashboard;
