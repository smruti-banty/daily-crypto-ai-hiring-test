import axios from "axios";
import {Book} from "../models/Book.ts";
import {getToken} from "./token.service.ts";

const BOOK_API_BASE_URL = "http://localhost:5001/api/books";

const apiClient = axios.create({
    baseURL: BOOK_API_BASE_URL,
});

// Axios interceptor to add Bearer token
apiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const handleError = (error: unknown): never => {
    if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "An error occurred while processing the request");
    }
    console.error("Unexpected Error:", error);
    throw new Error("Unexpected error occurred");
};

export const getAllBooks = async () => {
    try {
        return await apiClient.get<Book[]>("/");
    } catch (error) {
        handleError(error);
    }
};

export const getBookById = async (id: string) => {
    try {
        return await apiClient.get<Book>(`/${id}`);
    } catch (error) {
        handleError(error);
    }
};

export const createBook = async (book: Book) => {
    try {
        return await apiClient.post<Book>("/", book);
    } catch (error) {
        handleError(error);
    }
};

export const updateBook = async (id: string, book: Book) => {
    try {
        return await apiClient.put<Book>(`/${id}`, book);
    } catch (error) {
        handleError(error);
    }
};

export const deleteBook = async (id: string) => {
    try {
        return await apiClient.delete(`/${id}`);
    } catch (error) {
        handleError(error);
    }
};