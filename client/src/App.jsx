import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/common/LandingPage.jsx"
import HomePage from "./pages/common/HomePage.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import NotFoundedPage from "./pages/auth/NoteFound.jsx";
import DashboardPage from "./pages/superadmin/AdminDashboard.jsx";
import About from "./pages/common/About.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LabDashboard from "./pages/labs/LabDashboard.jsx";
import AssistantDashboard from "./pages/assistant/AssistentDashboard.jsx";
import { LabProvider } from "./context/LabContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { EquipmentTypeProvider } from "./context/equipmentContext/EquipmentTypeContext.jsx";
import { EquipmentProvider } from "./context/equipmentContext/EquipmentContext.jsx";
import LabsTables from "./pages/labs/LabsTables.jsx";
import LabEquipmentTypesTable from "./pages/labs/LabEquipmentTypesTable.jsx";
import { RepairProvider } from "./context/RepairContext.jsx";


function App() {
  return (
    <>
      <UserProvider>
        <LabProvider>
          <EquipmentTypeProvider>
            <EquipmentProvider>
              <RepairProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/unauthorized" element={<NotFoundedPage />} />
                  <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                  <Route path="/dashboard" element={<ProtectedRoute requiredRole="superadmin"><DashboardPage /></ProtectedRoute>} />
                  <Route path="/landing" element={<LandingPage />} />
                  <Route path="/labdashboard" element={<LabDashboard />} />
                  <Route path="/labtable" element={<LabsTables/>}/>
                  <Route path="/labequipmenttypetable" element={<LabEquipmentTypesTable/>}/>
                  <Route path="/assistantdashboard" element={<AssistantDashboard />} />
                </Routes>
              </BrowserRouter>
              <ToastContainer position="top-center" autoClose={2000} />
              </RepairProvider>
            </EquipmentProvider>
          </EquipmentTypeProvider>
        </LabProvider>
      </UserProvider>
    </>
  )
}

export default App
