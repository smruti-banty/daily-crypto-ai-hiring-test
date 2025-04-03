import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:5000";

export const getUser = async (token: string) => {
    try {
        const response = await axios.get(`${AUTH_API_BASE_URL}/api/auth/profile`, {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};
