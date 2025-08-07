import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { getAllEquipments } from "../../services/equipmentServices";

const EquipmentTypePanel = () => {
    const [equipmentTypes, setEquipmentTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tokenReady, setTokenReady] = useState(false);
    const [createEquipmentType, setCreateEquipmentType] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setTokenReady(true);
        } else {
            toast.error("you are not logged in");
        }
    }, []);

    useEffect(() => {
        if (tokenReady) {
            fetchEquipmentTypes();
        }
    }, [tokenReady]);
    const fetchEquipmentTypes = async () => {
        try {
            const res = await getAllEquipments();
            setEquipmentTypes(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Faild to fetch Equipment types");
        }
    };
    return (
        <>
            <div className="w-full h-full">
                {loading ? (<p>Loading Equipment Types</p>) : (
                    <>
                        <div className=" ">
                            <button onClick={() => setCreateEquipmentType(true)} className="p-2 border-gray-800 border-2 text-gary-800 rounded-sm">
                                New Equipment
                            </button>
                        </div>
                        <div className="pt-4">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead>
                                    <tr>
                                        <td className="p-2 border">Equipment type</td>
                                    </tr>
                                </thead>
                                <tbody>
                                   {equipmentTypes.map((equipmentType)=>(
                                    <tr key={equipmentType._id} className="align-middle">
                                        <td className="p-2 border">{equipmentType.name}</td>
                                    </tr>
                                   ))} 
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default EquipmentTypePanel;