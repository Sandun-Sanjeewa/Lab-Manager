import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/common/LandingPage.jsx"
import HomePage from "./pages/common/HomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFoundedPage from "./pages/auth/NoteFound.jsx";
import DashboardPage from "./pages/superadmin/AdminDashboard.jsx";
import About from "./pages/common/About.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LabDashboard from "./pages/labs/LabDashboard.jsx";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/unauthorized" element={<NotFoundedPage/>}/>
      <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute> }/>
      <Route path="/dashboard" element={<ProtectedRoute requiredRole="superadmin"><DashboardPage/></ProtectedRoute> }/>
      <Route path="/landing" element={<LandingPage/>}/>
      <Route path="/labdashboard" element={<LabDashboard/>} /> 
    </Routes>
      
    </BrowserRouter>
    <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}

export default App
