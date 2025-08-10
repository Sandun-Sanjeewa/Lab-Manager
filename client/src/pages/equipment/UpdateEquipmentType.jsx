import { useEffect, useState } from "react";
import { updateEquipmentType } from "../../services/equipmentServices";
import { toast } from "react-toastify";

const UpdateEquipmentType = ({ equipmentType, onClose, onEquipmentTypeUpdated }) => {
    const [equipmentUpdateData, setEquipmentUpdateData] = useState({
        name: ""
    });

    const [error, setError] = useState({
        name: "",
        general: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                setEquipmentUpdateData((prev) => ({
                    ...prev
                }));
            } catch (error) {
                console.error("Invalid token");
            }
        }
    }, []);

    useEffect(() => {
        if (equipmentType) {
            setEquipmentUpdateData({
                name: equipmentType.name || ""
            })
        }
    }, [equipmentType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipmentUpdateData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(prev => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEquipmentType(equipmentType._id, equipmentUpdateData);
            if (onEquipmentTypeUpdated) onEquipmentTypeUpdated();
            toast.success("Equipment Type Updated successfully");
            onClose();
        } catch (error) {
            setError(prev => ({
                ...prev,
                general: error.response?.data?.error || "Equpment Type update failed"
            }));
        }
    }

    return (
        <>
            <div className="text-gray-800">
                <form onSubmit={handleSubmit}>
                    <label>
                        Equipment Type
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={equipmentUpdateData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        className={`text-gray-700 text-sm border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.name ? "border-red-400" : "border-gray-200"}`}

                    />
                    <div className="flex justify-end ">

                        <button
                            type="button"
                            onClick={() => onClose()}
                            className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 hover:bg-red-700 "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 ml-4 hover:bg-green-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default UpdateEquipmentType;