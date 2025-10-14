import { UserProvider } from "./UserContext.jsx";
import { LabProvider } from "./LabContext.jsx";
import { EquipmentTypeProvider } from "./equipmentContext/EquipmentTypeContext.jsx";
import { EquipmentProvider } from "./equipmentContext/EquipmentContext.jsx";
import { RepairProvider } from "./RepairContext.jsx";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <LabProvider>
        <EquipmentTypeProvider>
          <EquipmentProvider>
            <RepairProvider>
              {children}
            </RepairProvider>
          </EquipmentProvider>
        </EquipmentTypeProvider>
      </LabProvider>
    </UserProvider>
  );
};

export default AppProviders;
