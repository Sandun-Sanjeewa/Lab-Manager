import Dashboard from "../../containers/Dashboard";
import EquipmentTypeTable from "../equipment/EquipmentTypeTable";


const LabEquipmentTypesTable = () => {
    return (
        <>
            <Dashboard
                maincontent={
                  <EquipmentTypeTable/>
                }
            />
        </>
    );
};
export default LabEquipmentTypesTable;