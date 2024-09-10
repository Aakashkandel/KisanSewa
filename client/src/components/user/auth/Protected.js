import { Navigate } from "react-router-dom";

export default function UsersPrivateRoute({ children }) {
    const adminToken = localStorage.getItem("userToken");
    return adminToken ? children : <Navigate to="/login" />;
}