import { useEffect, useState } from "react";
import { updateCable } from "../../../services/equipment/cableServices";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { toast } from "react-toastify";

const Editcable = ({ cable, onClose, onCableUpdated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [cableData, setCableData] = useState({
        cableID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        length: "",
        type: ""
    });
    const [error, setError] = useState({
        cableID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        length: "",
        type: "",
        general: ""
    });
    useEffect(() => {
        const cableType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Cable"
        );
        if (cableType && cableData.equipmentType !== cableType._id) {
            setCableData((prev) => ({
                ...prev,
                equipmentType: cableType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCableData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCable(cable._id, cableData);
            setCableData({
                cableID: "",
                lab: "",
                equipmentType: cableData.equipmentType,
                brand: "",
                status: "Available",
                length: "",
                type: ""
            });
            setError({
                cableID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                length: "",
                type: "",
                general: ""
            });
            if (onCableUpdated) onCableUpdated();
            toast.success("cable updated Successfully!");
            onClose();
            

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "cable updating failed"
            }));
        }
    };

    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">cable ID</label>
                            <input
                                type="text"
                                name="cableID"
                                value={cableData.cableID}
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
                                value={cableData.lab}
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
                            value={cableData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={cableData.brand}
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
                                value={cableData.status}
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
                            <label className="block mb-1">length</label>
                            <input
                                type="text"
                                name="length"
                                value={cableData.length}
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
                                value={cableData.type}
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

};

export default Editcable;