import Navbar from "../../containers/Navbar";
import MachineTable from "../equipment/machine/MachineTable";
import EquipmentTypeTable from "../equipment/EquipmentTypeTable";
import LabTable from "../labs/LabTable";
import LabDashboard from "../labs/LabDashboard";

const AssistantDashboard = () => {

    return (
        <>


            <LabDashboard />
            <div className="w-[300px] p-4">
                <MachineTable />
            </div>
            <div className="w-[300px] p-4 mt-8">
                <EquipmentTypeTable />
            </div>

            {/* <div className="w-full min-h-screen bg-black text-gray-100">
                <div>
                    <Navbar />
                </div>

                <div className="w-[300px] p-4 mt-8">
                    <EquipmentTypeTable />
                </div>
                <div className="w-[300px] p-4">
                    <MachineTable />
                </div>

                <div className="w-[800px] p-4">
                    <LabTable />
                </div>

            </div> */}

        </>
    );
};

export default AssistantDashboard;