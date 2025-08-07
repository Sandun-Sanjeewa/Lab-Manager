import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { updateLab } from "../../services/labServices";
import { toast } from "react-toastify";

const LabUpdateForm = ({ lab, onClose, onLabUpdated }) => {

    const [labCreateData, setLabCreateData] = useState({
        name: "",
        location: "",
        assistant: ""
    });

    const [assistantId, setAssistantId] = useState("");

    const [error, setError] = useState({
        name: "",
        location: "",
        assistant: "",
        general: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded && decoded.role === "assistant") {
                    setAssistantId(decoded.id);
                    setLabCreateData((prev) => ({
                        ...prev,
                        assistant: decoded.id
                    }));

                }


            } catch (error) {
                console.error("Invalid token");
            }
        }
    }, []);

    useEffect(() => {
        if (lab) {
            setLabCreateData({
                name: lab.name || "",
                location: lab.location || "",
                assistant: lab.assistant?._id || ""
            });
        }
    }, [lab]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLabCreateData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(prev => ({ ...prev, [name]: "", general: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateLab(lab._id, labCreateData);
            if (onLabUpdated) onLabUpdated();
            toast.success("Lab updated successfully!");
            onClose();
        } catch (error) {
            setError(prev => ({
                ...prev,
                general: error.response?.data?.error || "Lab update failed"
            }));
        }
    };


    return (
        <div className="text-gray-800">
            <form onSubmit={handleSubmit}>
                <div className="text-gray-700 text-sm">
                   <label>Lab</label>
                    <input
                        type="text"
                        name="name"
                        value={labCreateData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        className={`border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.name ? "border-red-400" : "border-gray-200"}`}

                    />
                </div>
                <div className="mt-2 text-gray-700 text-sm">
                    <label >Location</label>
                    <input
                        type="text"
                        name="location"
                        value={labCreateData.location}
                        onChange={handleChange}
                        autoComplete="off"
                        className={` border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.location ? "border-red-400" : "border-gray-200"}`}
                    />
                </div>
                <div className="hide">

                    <input
                        type="hidden"
                        name="assistant"
                        value={labCreateData.assistant}
                        readOnly
                    />
                </div>

                {error.general && (
                    <p className="text-red-500">{error.general}</p>
                )}

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
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LabUpdateForm;

