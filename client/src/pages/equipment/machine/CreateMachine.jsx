import { toast } from "react-toastify";
import { createMachine } from "../../../services/equipment/machineServices";
import { useLabs } from "../../../context/LabContext";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useState, useEffect } from "react";

const CreateMachine = ({ onClose, onMachineCreated }) => {
  const { labs } = useLabs();
  const { equipmentTypes } = useEquipmentType();

  const [machineData, setMachineData] = useState({
    lab: "",
    equipmentType: "",
    brand: "",
    status: "Available",
    machineID: "",
    os: "",
    ram: "",
    processor: "",
    storage: ""
  });

  const [error, setError] = useState({
    lab: "",
    equipmentType: "",
    brand: "",
    machineID: "",
    os: "",
    ram: "",
    processor: "",
    storage: "",
    general: ""
  });

  useEffect(() => {
    const machineType = equipmentTypes.find(
      (eq) => eq.equipmenttype === "Machine"
    );
    if (machineType && machineData.equipmentType !== machineType._id) {
      setMachineData((prev) => ({
        ...prev,
        equipmentType: machineType._id
      }));
    }
  }, [equipmentTypes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMachineData((prev) => ({
      ...prev,
      [name]: value
    }));
    setError((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMachine(machineData);
      setMachineData({
        lab: "",
        equipmentType: machineData.equipmentType,
        brand: "",
        status: "Available",
        machineID: "",
        os: "",
        ram: "",
        processor: "",
        storage: ""
      });
      setError({
        lab: "",
        equipmentType: "",
        brand: "",
        machineID: "",
        os: "",
        ram: "",
        processor: "",
        storage: "",
        general: ""
      });
      if (onMachineCreated) onMachineCreated();
      toast.success("Machine Created Successfully!");
      onClose();
    } catch (error) {
      setError((prev) => ({
        ...prev,
        general: error.response?.data?.error || "Machine creating failed"
      }));
    }
  };

  return (
    <div className="text-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
          <div>
            <label className="block mb-1">Machine ID</label>
            <input
              type="text"
              name="machineID"
              value={machineData.machineID}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Lab</label>
            <select
              name="lab"
              value={machineData.lab}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="" className="bg-black">
                Select Lab
              </option>
              {labs.map((lab) => (
                <option key={lab._id} value={lab._id} className="bg-black">
                  {lab.labname} ({lab.location})
                </option>
              ))}
            </select>
          </div>

          <input
            type="hidden"
            name="equipmentType"
            value={machineData.equipmentType}
          />

          <div>
            <label className="block mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={machineData.brand}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Status</label>
            <select
              name="status"
              value={machineData.status}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="Available" className="bg-black">
                Available
              </option>
              <option value="In Use" className="bg-black">
                In Use
              </option>
              <option value="Repair" className="bg-black">
                Repair
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Operating System</label>
            <input
              type="text"
              name="os"
              value={machineData.os}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">RAM</label>
            <input
              type="text"
              name="ram"
              value={machineData.ram}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Processor</label>
            <input
              type="text"
              name="processor"
              value={machineData.processor}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Storage</label>
            <input
              type="text"
              name="storage"
              value={machineData.storage}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {error.general && (
            <p className="text-red-500 text-sm">{error.general}</p>
          )}
        </div>

        <div className="flex justify-end space-x-2 md:m-6 m-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMachine;
