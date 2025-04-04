import { Request, Response, NextFunction } from "express";
import Book from "../models/book.model";

/**
 * @desc Get all books for a specific user
 * @route GET /api/books
 */
export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId; // Retrieve user ID from request (set in middleware)
        const books = await Book.find({ userId });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error });
    }
};

export const getBook = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userId;
    const bookId = req.params.bookId;

    if (!userId || !bookId) {
        return res.status(403).json({ message: "No book with this id" });
    }

    try {
        const book = await Book.findOne({_id: bookId, userId});

        if (!book) {
            res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error fetching book", error });
    }
}

/**
 * @desc Add a new book
 * @route POST /api/books
 */
export const addBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        const { title, author, genre } = req.body;

        if (!title || !author || !genre) {
            return res.status(400).json({ message: "Missing few fields" });
        }

        const newBook = await Book.create({ title, author, genre, userId });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error adding book", error });
    }
};

/**
 * @desc Update a book
 * @route PUT /api/books/:id
 */
export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        const bookId = req.params.id;
        const { title, author, genre } = req.body;

        const updatedBook = await Book.findOneAndUpdate(
            { _id: bookId, userId },
            { title, author, genre },
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: "Error updating book", error });
    }
};

/**
 * @desc Delete a book
 * @route DELETE /api/books/:id
 */
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        const bookId = req.params.id;

        const deletedBook = await Book.findOneAndDelete({ _id: bookId, userId });

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting book", error });
    }
};
