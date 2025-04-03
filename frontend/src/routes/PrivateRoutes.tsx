import {Navigate} from "react-router";
import {ReactNode} from "react";

type PrivateRoutes = {
    children: ReactNode;
};

export const PrivateRoutes = ({children}: PrivateRoutes) => {
    if (!localStorage.getItem('token')) {
        return children;
    }
    return <Navigate to="/login" />
}