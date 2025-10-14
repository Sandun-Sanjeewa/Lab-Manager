import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import AppProviders from "./context/AppProviders.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

import LandingPage from "./pages/common/LandingPage.jsx";
import HomePage from "./pages/common/HomePage.jsx";
import About from "./pages/common/About.jsx";
import NotFoundedPage from "./pages/auth/NoteFound.jsx";
import DashboardPage from "./pages/superadmin/AdminDashboard.jsx";
import LabDashboard from "./pages/labs/LabDashboard.jsx";
import LabsTables from "./pages/labs/LabsTables.jsx";
import LabEquipmentTypesTable from "./pages/labs/LabEquipmentTypesTable.jsx";
import AssistantDashboard from "./pages/assistant/AssistentDashboard.jsx";
import TechnicionDachboard from "./pages/technition/TechnicionDachboard.jsx";
import LecturerDashboard from "./pages/lecturer/LecturerDashboard.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/unauthorized" element={<NotFoundedPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="superadmin">
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/labdashboard" element={<LabDashboard />} />
          <Route path="/labtable" element={<LabsTables />} />
          <Route path="/labequipmenttypetable" element={<LabEquipmentTypesTable />} />
          <Route path="/assistantdashboard" element={<AssistantDashboard />} />
          <Route path="/lecturerdashboard" element={<LecturerDashboard/>} />
          <Route path="/techniciondashboard" element={<TechnicionDachboard/>} />
          <Route path="/studentdashboard" element={<StudentDashboard/>} />
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center" autoClose={2000} />
    </AppProviders>
  );
}

export default App;
