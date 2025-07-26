
import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({children , requiredRole}) =>{
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to="/landing"/>
    }

    try {
        const user = jwtDecode(token);
        if(requiredRole && user.role !== requiredRole){
            return <Navigate to="/home"/>
        }

        return children;
    } catch (error) {
        return <Navigate to="/landing"/>
    }
};

export default ProtectedRoute