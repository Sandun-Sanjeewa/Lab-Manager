import { useState } from "react";
import { createEquipmentType } from "../../services/equipmentServices";
import { toast } from "react-toastify";

const CreateEquipmentType = ({ onClose, onEquipmentTypeCreated }) => {
    const [equipmentTypeData, setEquipmentTypeData] = useState({
        equipmenttype: ""
    });

    const [error, setError] = useState({
        equipmenttype: "",
        general: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipmentTypeData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(prev => ({
            ...prev,
            [name]: "",
            general: ""
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await createEquipmentType(equipmentTypeData);
            setEquipmentTypeData({ equipmenttype: "" });
            setError({ equipmenttype: "" });
            if (onEquipmentTypeCreated) onEquipmentTypeCreated();
            toast.success("Equipment type is created successfully");
            onClose();
        } catch (error) {
            setError(prev => ({
                ...prev,
                general: error.response?.data?.error || "Equipment type creating faild"
            }));
        }
    };
    return (
        <>
            <div className="text-gray-800">
                <form onSubmit={handleSubmit}>
                    <label>
                        Equipment Type
                    </label>
                    <input
                        type="text"
                        name="equipmenttype"
                        value={equipmentTypeData.equipmenttype}
                        onChange={handleChange}
                        autoComplete="off"
                        className={`text-gray-700 text-sm border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.equipmenttype ? "border-red-400" : "border-gray-200"}`}

                    />
                    <div className="flex justify-end ">

                        <button
                            onClick={() => onClose()}
                            className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 hover:bg-red-700 "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 ml-4 hover:bg-green-700"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default CreateEquipmentType;