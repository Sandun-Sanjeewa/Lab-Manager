import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/common/LandingPage.jsx"
import HomePage from "./pages/common/HomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFoundedPage from "./pages/auth/NoteFound.jsx";
import DashboardPage from "./pages/admin/AdminDashboard.jsx";
import About from "./pages/common/About.jsx";
import SignupForm from "./pages/auth/SignupForm.jsx";
import LoginForm from "./pages/auth/LoginForm.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignupForm/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/unauthorized" element={<NotFoundedPage/>}/>
      <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute> }/>
      <Route path="/dashboard" element={<ProtectedRoute requiredRole="admin"><DashboardPage/></ProtectedRoute> }/>
      <Route path="/landing" element={<LandingPage/>}/>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
      
    </BrowserRouter>
    <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}

export default App
