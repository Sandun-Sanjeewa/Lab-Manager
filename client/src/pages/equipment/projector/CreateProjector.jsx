import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { toast } from "react-toastify";
import { createProjector } from "../../../services/equipment/projectorServices";

const CreateProjector = ({ onClose, onProjectorCreated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [projectorData, setProjectorData] = useState({
        projectorID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        connectivity: "",
        resolution: ""
    });

    const [error, setError] = useState({
        projectorID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        connectivity: "",
        resolution: "",
        general: ""
    });

    useEffect(() => {
        const projectorType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Projector"
        );
        if (projectorType && projectorData.equipmentType !== projectorType._id) {
            setProjectorData((prev) => ({
                ...prev,
                equipmentType: projectorType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectorData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProjector(projectorData);
            setProjectorData({
                projectorID: "",
                lab: "",
                equipmentType: projectorData.equipmentType,
                brand: "",
                status: "Available",
                connectivity: "",
                resolution: ""
            });
            setError({
                projectorID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                connectivity: "",
                resolution: "",
                general: ""
            });
            if (onProjectorCreated) onProjectorCreated();
            toast.success("Projector Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Projector creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Projector ID</label>
                            <input
                                type="text"
                                name="projectorID"
                                value={projectorData.projectorID}
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
                                value={projectorData.lab}
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
                            value={projectorData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={projectorData.brand}
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
                                value={projectorData.status}
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
                                value={projectorData.connectivity}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Resolution</label>
                            <input
                                type="text"
                                name="resolution"
                                value={projectorData.resolution}
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
export default CreateProjector;