import {Navigate} from "react-router";
import {ReactNode} from "react";
import {isAuthorized} from "../services/token.service.ts";

type PrivateRoutesProps = {
    children: ReactNode;
};

export const PrivateRoutes = ({children}: PrivateRoutesProps) => {
    if (isAuthorized()) {
        return children;
    }
    return <Navigate to="/login" />
}