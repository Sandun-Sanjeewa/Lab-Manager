import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { toast } from "react-toastify";
import { createLap } from "../../../services/equipment/lapServices";

const CreateLap = ({ onClose, onLapCreated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [lapData, setLapData] = useState({
        lapID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        os: "",
        ram: "",
        processor: "",
        storage: "",
        batteryHealth: "Good"
    });

    const [error, setError] = useState({
        lapID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        os: "",
        ram: "",
        processor: "",
        storage: "",
        batteryHealth: "Good",
        general: ""
    });

    useEffect(() => {
        const lapType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Lap"
        );
        if (lapType && lapData.equipmentType !== lapType._id) {
            setLapData((prev) => ({
                ...prev,
                equipmentType: lapType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLapData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createLap(lapData);
            setLapData({
                lapID: "",
                lab: "",
                equipmentType: lapData.equipmentType,
                brand: "",
                status: "Available",
                os: "",
                ram: "",
                processor: "",
                storage: "",
                batteryHealth: "Good"
            });
            setError({
                lapID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                os: "",
                ram: "",
                processor: "",
                storage: "",
                batteryHealth: "Good",
                general: ""
            });
            if (onLapCreated) onLapCreated();
            toast.success("Lap Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Lap creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Lap ID</label>
                            <input
                                type="text"
                                name="lapID"
                                value={lapData.lapID}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Lab</label>
                            <select
                                name="lab"
                                value={lapData.lab}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
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
                            value={lapData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={lapData.brand}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Status</label>
                            <select
                                name="status"
                                value={lapData.status}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
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
                            <label className="block mb-1">os</label>
                            <input
                                type="text"
                                name="os"
                                value={lapData.os}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">ram</label>
                            <input
                                type="text"
                                name="ram"
                                value={lapData.ram}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1"> processor</label>
                            <input
                                type="text"
                                name="processor"
                                value={lapData.processor}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1"> Storage</label>
                            <input
                                type="text"
                                name="storage"
                                value={lapData.storage}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">BatteryHealth</label>
                             <select
                               type="text"
                                name="batteryHealth"
                                value={lapData.batteryHealth}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            >
                                <option value="Good" className="bg-black">
                                    Good
                                </option>
                                <option value="Weak" className="bg-black">
                                    Weak
                                </option>
                                
                            </select>
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
        </>
    );
};
export default CreateLap;