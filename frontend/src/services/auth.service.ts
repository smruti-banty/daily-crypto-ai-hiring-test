import axios from "axios";

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

const setToken = (token:string) => {
    localStorage.setItem("token", token);
}