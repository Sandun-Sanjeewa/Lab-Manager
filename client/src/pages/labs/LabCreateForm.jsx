import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { createLab } from "../../services/labServices";
import { toast } from "react-toastify";


const CreateLabForm = ({ onClose, onLabCreated }) => {
  

    const [labCreateData, setLabCreateData] = useState({
        labname: "",
        location: "",
        assistant: ""
    });

    const [assistantId, setAssistantId] = useState("");

    const [error, setError] = useState({
        labname: "",
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
            const res = await createLab(labCreateData);
            setLabCreateData({
                labname: "",
                location: "",
                assistant: assistantId
            });
            setError({ labname: "", location: "" });
            if (onLabCreated) onLabCreated();
            toast.success("Lab created successfully!");
            onClose();
        } catch (error) {
            setError(prev => ({
                ...prev,
                general: error.response?.data?.error || "Lab creating failed"
            }));
        }
    };

    return (
        <div className="text-gray-800">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Lab name</label>
                    <input
                        type="text"
                        name="labname"
                        value={labCreateData.labname}
                        onChange={handleChange}
                        autoComplete="off"
                        className={`text-gray-700 text-sm border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.labname ? "border-red-400" : "border-gray-200"}`}

                    />
                </div>
                <div className="mt-2">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={labCreateData.location}
                        onChange={handleChange}
                        autoComplete="off"
                        className={`text-gray-700 text-sm border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.location ? "border-red-400" : "border-gray-200"}`}
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
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateLabForm;
