import {Routes, Route} from "react-router";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import {PrivateRoutes} from "./PrivateRoutes.tsx";
import Home from "../pages/Home.tsx";

const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<PrivateRoutes>
            <Home/>
        </PrivateRoutes>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
};

export default AppRoutes;
