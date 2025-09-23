import Dashboard from "../../containers/Dashboard";
import LabTable from "./LabTable";

const LabsTables =()=>{
    return(
        <>
        <Dashboard
        maincontent={
            <LabTable/>
        }
        />
        </>
    );
};
export default LabsTables