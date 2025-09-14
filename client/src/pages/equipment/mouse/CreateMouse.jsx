import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { createMouse } from "../../../services/equipment/mouseServices";
import { toast } from "react-toastify";

const CreateMouse = ({ onClose, onMouseCreated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [mouseData, setMouseData] = useState({
        mouseID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        connectivity: "",
        type: ""
    });

    const [error, setError] = useState({
        mouseID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        connectivity: "",
        type: "",
        general: ""
    });

    useEffect(() => {
        const mouseType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Mouse"
        );
        if (mouseType && mouseData.equipmentType !== mouseType._id) {
            setMouseData((prev) => ({
                ...prev,
                equipmentType: mouseType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMouseData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMouse(mouseData);
            setMouseData({
                mouseID: "",
                lab: "",
                equipmentType: mouseData.equipmentType,
                brand: "",
                status: "Available",
                connectivity: "",
                type: ""
            });
            setError({
                mouseID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                connectivity: "",
                type: "",
                general: ""
            });
            if (onMouseCreated) onMouseCreated();
            toast.success("Mouse Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Mouse creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Mouse ID</label>
                            <input
                                type="text"
                                name="mouseID"
                                value={mouseData.mouseID}
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
                                value={mouseData.lab}
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
                            value={mouseData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={mouseData.brand}
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
                                value={mouseData.status}
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
                                value={mouseData.connectivity}
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
                                value={mouseData.type}
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
export default CreateMouse;