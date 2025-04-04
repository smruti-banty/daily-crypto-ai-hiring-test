import { useEffect, useState } from "react";
import { getAllBooks } from "../services/books.service";
import {Book} from "../models/Book.ts";

export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await getAllBooks();
            setBooks(response?.data || []);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return { books, loading, error, refetch: fetchBooks };
};
