import axios from "axios";
import {removeToken, setToken} from "./token.service.ts";

const AUTH_API_BASE_URL = "http://localhost:5000/api/auth";

export const userLogin = async (email:string, password:string) => {
    const body = {email, password};
    try {
        const response = await axios.post(AUTH_API_BASE_URL + "/login", body);
        setToken(response.data.token);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const registerUser = async (email:string, password:string, name:string) => {
    const body = {email, password, name};
    try {
        const response = await axios.post(AUTH_API_BASE_URL + "/register", body);
        setToken(response.data.token);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const logoutUser = () => {
    removeToken();
}