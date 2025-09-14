import { useEffect, useState } from "react";
import { useEquipmentType } from "../../../context/equipmentContext/EquipmentTypeContext";
import { useLabs } from "../../../context/LabContext";
import { createPrinter } from "../../../services/equipment/printerServices";
import { toast } from "react-toastify";

const CreatePrinter = ({ onClose, onPrinterCreated }) => {
    const { labs } = useLabs();
    const { equipmentTypes } = useEquipmentType();
    const [printerData, setPrinterData] = useState({
        printerID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        printerType: "",
        colorSupport: "No",
        maxResolution: ""
    });

    const [error, setError] = useState({
        printerID: "",
        lab: "",
        equipmentType: "",
        brand: "",
        status: "Available",
        printerType: "",
        colorSupport: "No",
        maxResolution: "",
        general: ""
    });

    useEffect(() => {
        const printerType = equipmentTypes.find(
            (eq) => eq.equipmenttype === "Printer"
        );
        if (printerType && printerData.equipmentType !== printerType._id) {
            setPrinterData((prev) => ({
                ...prev,
                equipmentType: printerType._id
            }));
        }
    }, [equipmentTypes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrinterData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError((prev) => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPrinter(printerData);
            setPrinterData({
                printerID: "",
                lab: "",
                equipmentType: printerData.equipmentType,
                brand: "",
                status: "Available",
                printerType: "",
                colorSupport: "No",
                maxResolution: ""
            });
            setError({
                printerID: "",
                lab: "",
                equipmentType: "",
                brand: "",
                status: "Available",
                printerType: "",
                colorSupport: "No",
                maxResolution: "",
                general: ""
            });
            if (onPrinterCreated) onPrinterCreated();
            toast.success("Printer Created Successfully!");
            onClose();

        } catch (error) {
            setError((prev) => ({
                ...prev,
                general: error.response?.data?.error || "Printer creating failed"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-2">
                        <div>
                            <label className="block mb-1">Printer ID</label>
                            <input
                                type="text"
                                name="printerID"
                                value={printerData.printerID}
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
                                value={printerData.lab}
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
                            value={printerData.equipmentType}
                        />

                        <div>
                            <label className="block mb-1">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={printerData.brand}
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
                                value={printerData.status}
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
                            <label className="block mb-1">printerType</label>
                            <input
                                type="text"
                                name="printerType"
                                value={printerData.printerType}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">ColorSupport</label>
                            <select
                                name="colorSupport"
                                value={printerData.colorSupport}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                                autoComplete="off"
                            >
                                <option value="No" className="bg-black">
                                    No
                                </option>
                                <option value="Yes" className="bg-black">
                                    Yes
                                </option>
                                
                                
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">MaxResolution</label>
                            <input
                                type="text"
                                name="maxResolution"
                                value={printerData.maxResolution}
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
export default CreatePrinter;