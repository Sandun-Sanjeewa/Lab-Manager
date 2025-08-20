import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { getAllEquipments } from "../../services/equipmentServices.js";
import Modal from "../../components/Model";
import CreateEquipmentType from "../equipment/CreateEquipmentType.jsx";
import UpdateEquipmentType from "../equipment/UpdateEquipmentType.jsx";
import DeleteEquipmentType from "../equipment/DeleteEquipmentType.jsx";

const EquipmentTypePanel = () => {
    const [equipmentTypes, setEquipmentTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tokenReady, setTokenReady] = useState(false);
    const [createEquipmentType, setCreateEquipmentType] = useState(false);
    const [editingEquipmentType, setEditingEquipmentType] = useState(null);
    const [equipmentTypeToDelete, setEquipmentTypeToDelete] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

    const handleEditClick = (equipmentType) => {
        setEditingEquipmentType(equipmentType);
        setIsEditModalOpen(true);
    };

    const deleteEquipmentTypeHandle = async (equipmentType) => {
        setEquipmentTypeToDelete(equipmentType);
        setIsDeleteModalOpen(true);
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
                            <Modal
                                isOpen={createEquipmentType}
                                onClose={() => setCreateEquipmentType(false)}
                            >
                                <CreateEquipmentType
                                    onClose={() => setCreateEquipmentType(false)}
                                    onEquipmentTypeCreated={fetchEquipmentTypes}
                                />
                            </Modal>

                        </div>
                        <div className="pt-4">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="p-2 border"></th>
                                        <th className="p-2 border">Equipment type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {equipmentTypes.map((equipmentType) => (
                                        <tr key={equipmentType._id} className="align-middle">
                                            <td className="p-2 border">
                                                <div className="flex justify-around">
                                                    <button onClick={() => handleEditClick(equipmentType)}>Edit</button>
                                                    <Modal
                                                        isOpen={isEditModalOpen}
                                                        onClose={() => setIsEditModalOpen(false)}
                                                    >
                                                        <UpdateEquipmentType
                                                            equipmentType={editingEquipmentType}
                                                            onClose={() => setIsEditModalOpen(false)}
                                                            onEquipmentTypeUpdated={fetchEquipmentTypes}
                                                        />
                                                    </Modal>
                                                    <button onClick={() => deleteEquipmentTypeHandle(equipmentType)}>Delete</button>
                                                    <Modal
                                                        isOpen={isDeleteModalOpen}
                                                        onClose={() => setIsDeleteModalOpen(false)}
                                                    >
                                                        <DeleteEquipmentType
                                                            equipmentType={equipmentTypeToDelete}
                                                            onClose={() => setIsDeleteModalOpen(false)}
                                                            onEquipmentTypeDelete={fetchEquipmentTypes}
                                                        />
                                                    </Modal>
                                                </div>
                                            </td>
                                            <td className="p-2 border ">
                                                <div className="ml-4">
                                                    {equipmentType.equipmenttype}
                                                </div>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                 <p className="ml-4 mt-2 text-lg">Total Equipment Types: {equipmentTypes.length}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default EquipmentTypePanel;