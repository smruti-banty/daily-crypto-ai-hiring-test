import {Router} from "express";
import {getBooks, addBook, deleteBook, updateBook, getBook} from "../controller/books.controller";
import {authenticate} from "../middleware/auth.middleware";

const router = Router();

router.get("/", authenticate, getBooks);
router.get("/:bookId", authenticate, getBook);
router.post("/", authenticate, addBook);
router.put("/:id", authenticate, updateBook);
router.delete("/:id", authenticate, deleteBook);

export default router;
