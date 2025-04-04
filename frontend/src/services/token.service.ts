const TOKEN_NAME = "access_token";

export const setToken = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN_NAME);
}

export const isAuthorized = () => {
    return !!localStorage.getItem(TOKEN_NAME);
}