import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../containers/Navbar";
import { getAllLabs } from "../../services/labServices";
import Modal from "../../components/Model";
import CreateLabForm from "../labs/LabCreateForm";
import LabUpdateForm from "../labs/LabUpdateForm";
import LabDelete from "../labs/LabDelete";
import EquipmentTypePanel from "./EquipmentTypePanel";

const AssistantDashboard = () => {
    const [labs, setLabs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreateLabOpen, setIsCreateLab] = useState(false);
    const [editingLabOpen, setEditingLabOpen] = useState(null);
    const [editingLabData, setEditingLabData] = useState(null);
    const [selecetedLab, setSelectedLab] = useState("");
    const [labToDelete, setLabToDelete] = useState(null);
    const [tokenRady, setTokenReady] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setTokenReady(true);
        } else {
            toast.error("you are not logged in.")
        }
    }, []);

    useEffect(() => {
        if (tokenRady) {
            fetchLab();
        }
    }, [tokenRady]);

    const fetchLab = async () => {
        try {
            const res = await getAllLabs();
            setLabs(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Failed to fetch labs");
        }
    };

    const handleEditClick = (lab) => {
        setEditingLabData(lab);
        setEditingLabOpen(true);
    };


    const deleteLabHandle = async (lab) => {
        setLabToDelete(lab);
        setSelectedLab(true);
    };



    return (
        <>
            <div className="w-full min-h-screen bg-black text-gray-100">
                <Navbar />
                {loading ? (<p>Loading users...</p>) : (
                    <>
                        <div className="ml-4 mt-2">
                            <button onClick={() => setIsCreateLab(true)} className="p-2 border-gray-800 border-2 text-gary-800 rounded-sm">Create lab</button>
                            <Modal
                                isOpen={isCreateLabOpen}
                                onClose={() => setIsCreateLab(false)}
                                title=""
                            >
                                <CreateLabForm onClose={() => setIsCreateLab(false)} onLabCreated={fetchLab} />
                            </Modal>
                        </div>
                        <div className="p-4">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="p-2 border"></th>
                                        <th className="p-2 border">Name</th>
                                        <th className="p-2 border">location</th>
                                        <th className="p-2 border">Assistant Name</th>
                                        <th className="p-2 border">Assistant Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {labs.map((lab) => (
                                        <tr key={lab._id} className=" align-middle">
                                            <td className="p-2 border ">
                                                <div className="flex  justify-around" >
                                                    <button  onClick={() => handleEditClick(lab)}>Edit</button>

                                                    <Modal
                                                        isOpen={editingLabOpen}
                                                        onClose={() => setEditingLabOpen(false)}
                                                    >
                                                        <LabUpdateForm
                                                            lab={editingLabData}
                                                            onClose={() => setEditingLabOpen(false)}
                                                            onLabUpdated={fetchLab}
                                                        />
                                                    </Modal>
                                                    <button onClick={() => deleteLabHandle(lab)}>Delete</button>
                                                    <Modal
                                                        isOpen={selecetedLab}
                                                        onClose={() => setSelectedLab(false)}
                                                    >
                                                        <LabDelete
                                                            lab={labToDelete}
                                                            onClose={() => setSelectedLab(false)}
                                                            onLabDelete={fetchLab}
                                                        />
                                                    </Modal>

                                                </div>
                                            </td>

                                            <td className="p-2 border ">

                                                <div className="pl-4">
                                                    {lab.name}
                                                </div>
                                                {/* <div >
                                                        <button className="mr-4" onClick={() => handleEditClick(lab)}>Edit</button>

                                                        <Modal
                                                            isOpen={editingLabOpen}
                                                            onClose={() => setEditingLabOpen(false)}
                                                        >
                                                            <LabUpdateForm
                                                                lab={editingLabData}
                                                                onClose={() => setEditingLabOpen(false)}
                                                                onLabUpdated={fetchLab}
                                                            />
                                                        </Modal>
                                                        <button onClick={() => deleteLabHandle(lab)}>Delete</button>
                                                        <Modal
                                                            isOpen={selecetedLab}
                                                            onClose={() => setSelectedLab(false)}
                                                        >
                                                            <LabDelete
                                                            lab={labToDelete}
                                                            onClose={()=>setSelectedLab(false)}
                                                            onLabDelete={fetchLab}
                                                            />
                                                        </Modal>

                                                    </div> */}



                                            </td>
                                            <td className="p-2 border">
                                                <div className="pl-4">{lab.location}</div>

                                            </td>
                                            <td className="p-2 border">
                                                <div className="pl-4">{lab.assistant?.name || "N/A"}</div>

                                            </td>
                                            <td className="p-2 border">
                                                <div className="pl-4">{lab.assistant?.email || "N/A"}</div>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <p className="ml-4 mt-2 text-lg">Total Labs: {labs.length}</p>

                        </div>
                    </>
                )}

                <div className="w-[300px] p-4">
                    <EquipmentTypePanel />
                </div>

            </div>

        </>
    );
};

export default AssistantDashboard;