import Navbar from "../../containers/Navbar";
import MachineTable from "../equipment/machine/MachineTable";
import EquipmentTypeTable from "../equipment/EquipmentTypeTable";
import LabTable from "../labs/LabTable";
import LabDashboard from "../labs/LabDashboard";
import MouseTable from "../equipment/mouse/MouseTable";
import KeyboardTable from "../equipment/keyboard/KeyboardTable";
import MicTable from "../equipment/mic/MicTable";
import PrinterTable from "../equipment/printer/PrinterTable";
import MonitorTable from "../equipment/monitor/MonitorTable";
import ProjectorTable from "../equipment/projector/ProjectorTable";
import ScanerTable from "../equipment/scaner/ScanerTable";
import UpsTable from "../equipment/ups/UpsTable";
import CableTable from "../equipment/cable/CableTable";
import LapTable from "../equipment/lap/LapTable";

const AssistantDashboard = () => {

    return (
        <>


            <LabDashboard />
            {/* <div className=" p-4 mt-8">
                <EquipmentTypeTable />
            </div>
            <div className="p-4">
                <MachineTable />
            </div>

            <div className=" p-4">
                <MouseTable />
            </div>
            <div className=" p-4">
                <KeyboardTable />
            </div>
            <div className=" p-4">
                <MicTable />
            </div>
            <div className=" p-4">
                <PrinterTable />
            </div>
            <div className=" p-4">
                <MonitorTable />
            </div>

            <div className=" p-4">
                <ProjectorTable />
            </div>

            <div className=" p-4">
                <ScanerTable />
            </div>
            <div className=" p-4">
                <UpsTable />
            </div>
            <div className=" p-4">
                <CableTable />
            </div>
            <div className=" p-4">
                <LapTable />
            </div>
            <div>
                <LabTable/>
            </div> */}

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