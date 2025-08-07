import { toast } from "react-toastify";
import { deleteLab } from "../../services/labServices";

const LabDelete = ({ lab, onClose, onLabDelete }) => {
    const labdelete = async () =>{
        try {
            await deleteLab(lab._id);
            if (onLabDelete) onLabDelete();
            toast.success("Lab Delete Successfully");
            onClose();
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete lab");
        }
    }
    return (
        <>
            <div className="text-gray-800">
                <h3 className="text-lg font-bold mb-4">
                    Are you sure you want to delete{" "}
                    <span className="text-red-600">{lab.name}</span>?
                </h3>
                <div className="flex justify-end">
                    <button className="mr-4 w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 ml-4 hover:bg-green-700" onClick={()=>onClose()}>Cancel</button>
                    <button onClick={()=>labdelete()} className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-gray-100 hover:text-gray-100 hover:bg-red-700">Delete</button>
                </div>
            </div>
        </>
    );
};

export default LabDelete;