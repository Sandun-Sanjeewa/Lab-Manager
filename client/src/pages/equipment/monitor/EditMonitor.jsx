import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { toast } from "react-toastify";
import { updateMonitor } from "../../../services/equipment/monitorServices";

const EditMonitor = ({ monitor, onClose, onMonitorUpdated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [monitorData, setMonitorData] = useState({
        monitorID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        resolution: "",
        size: "",
        refreshRate: ""
    });

    const [error, setError] = useState({
        monitorID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        resolution: "",
        size: "",
        refreshRate: "",
        general: ""
    });

    useEffect(() => {
        const monitorType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Monitor"
        );
        if (monitorType && monitorData.equipmentType !== monitorType._id) {
            setMonitorData((prev) => ({
                ...prev,
                equipmentType: monitorType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMonitorData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateMonitor(monitor._id,monitorData);
            setMonitorData({
                monitorID: "",
                lab: "",
                equipmentType: monitorData.equipmentType,
                brand: "",
                status: "Available",
                resolution: "",
                size: "",
                refreshRate: ""
            });
            setError({
                monitorID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                resolution: "",
                size: "",
                refreshRate: "",
                general: ""
            });
            if (onMonitorUpdated) onMonitorUpdated();
            toast.success("Monitor Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Monitor creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Monitor ID</label>
                            <input
                                type="text"
                                name="monitorID"
                                value={monitorData.monitorID}
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
                                value={monitorData.lab}
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
                            value={monitorData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={monitorData.brand}
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
                                value={monitorData.status}
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
                            <label className="block mb-1">resolution</label>
                            <input
                                type="text"
                                name="resolution"
                                value={monitorData.resolution}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Size</label>
                            <input
                                type="text"
                                name="size"
                                value={monitorData.size}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                         <div>
                            <label className="block mb-1"> RefreshRate</label>
                            <input
                                type="text"
                                name="refreshRate"
                                value={monitorData.refreshRate}
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
export default EditMonitor;