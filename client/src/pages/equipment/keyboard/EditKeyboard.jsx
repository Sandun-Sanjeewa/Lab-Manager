import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { toast } from "react-toastify";
import { updateKeyboard } from "../../../services/equipment/KeyboardServices";

const EditKeyboard = ({ keyboard, onClose, onKeyboardUpdated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [keyboardData, setKeyboardData] = useState({
        keyboardID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        connectivity: "",
        type: ""
    });

    const [error, setError] = useState({
        keyboardID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        connectivity: "",
        type: "",
        general: ""
    });

    useEffect(() => {
        const keyboardType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Keyboard"
        );
        if (keyboardType && keyboardData.equipmentType !== keyboardType._id) {
            setKeyboardData((prev) => ({
                ...prev,
                equipmentType: keyboardType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setKeyboardData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateKeyboard(keyboard._id, keyboardData);
            setKeyboardData({
                keyboardID: "",
                lab: "",
                equipmentType: keyboardData.equipmentType,
                brand: "",
                status: "Available",
                connectivity: "",
                type: ""
            });
            setError({
                keyboardID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                connectivity: "",
                type: "",
                general: ""
            });
            if (onKeyboardUpdated) onKeyboardUpdated();
            toast.success("Keyboard Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Keyboard creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Keyboard ID</label>
                            <input
                                type="text"
                                name="keyboardID"
                                value={keyboardData.keyboardID}
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
                                value={keyboardData.lab}
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
                            value={keyboardData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={keyboardData.brand}
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
                                value={keyboardData.status}
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
                            <label className="block mb-1">Connectivity</label>
                            <input
                                type="text"
                                name="connectivity"
                                value={keyboardData.connectivity}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={keyboardData.type}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
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
        </>
    );
};
export default EditKeyboard;