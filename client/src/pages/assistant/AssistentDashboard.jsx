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
        </>
    );
};

export default AssistantDashboard;