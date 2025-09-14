import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { toast } from "react-toastify";
import { createUps } from "../../../services/equipment/upsServices";


const CreateUps = ({ onClose, onUpsCreated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [upsData, setUpsData] = useState({
        upsID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        capacity: "",
        batteryHealth: "Good"
    });

    const [error, setError] = useState({
        upsID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        capacity: "",
        batteryHealth: "Good",
        general: ""
    });

    useEffect(() => {
        const upsType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "UPS"
        );
        if (upsType && upsData.equipmentType !== upsType._id) {
            setUpsData((prev) => ({
                ...prev,
                equipmentType: upsType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpsData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUps(upsData);
            setUpsData({
                upsID: "",
                lab: "",
                equipmentType: upsData.equipmentType,
                brand: "",
                status: "Available",
                capacity: "",
                batteryHealth: "Good"
            });
            setError({
                upsID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                capacity: "",
                batteryHealth: "Good",
                general: ""
            });
            if (onUpsCreated) onUpsCreated();
            toast.success("Ups Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Ups creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Ups ID</label>
                            <input
                                type="text"
                                name="upsID"
                                value={upsData.upsID}
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
                                value={upsData.lab}
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
                            value={upsData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={upsData.brand}
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
                                value={upsData.status}
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
                            <label className="block mb-1">Capacity</label>
                            <input
                                type="text"
                                name="capacity"
                                value={upsData.capacity}
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
                                value={upsData.batteryHealth}
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
export default CreateUps;