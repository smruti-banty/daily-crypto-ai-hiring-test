import { Routes, Route } from "react-router";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";

const AppRoutes = () => {
  return <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  </Routes>
};

export default AppRoutes;
