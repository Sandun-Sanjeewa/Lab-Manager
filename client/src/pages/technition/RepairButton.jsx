import { Wrench } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/Model";
import CreateRepairForm from "./CreateRepairForm";
import { useRepair } from "../../context/RepairContext";
const RepairButton = () => {
    const {repairs ,fetchRepairs} = useRepair();
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md"

                >
                    <Wrench size={18} />
                    New Repair
                </button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <CreateRepairForm onClose={()=>setIsModalOpen(false)} onRepairCreated={fetchRepairs} />
                </Modal>
            </div>
        </>
    );
};
export default RepairButton