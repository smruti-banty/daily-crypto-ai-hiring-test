import Header from "../components/Header.tsx";
import AddBookModal from "../components/AddBookModal.tsx";
import {useEffect, useState} from "react";
import BooksTable from "../components/BooksTable.tsx";
import {useBooks} from "../hooks/useBooks.ts";
import {deleteBook} from "../services/books.service.ts";
import Toaster from "../components/Toaster.tsx";
import {useSearchParams} from "react-router";
import {ToastType} from "../models/ToastType.ts";

const Home = () => {
    const [searchParams] = useSearchParams();

    const [showAddBookModal, setShowAddBookModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState(ToastType.INFO);
    const [bookId, setBookId] = useState("");
    const {books, refetch} = useBooks();

    useEffect(() => {
        if (searchParams.get("success") != null) {
            showToaster("Account created successfully.");
        }
    }, [searchParams]);

    const showToaster = (message: string, type = ToastType.INFO) => {
        setToastType(type);
        setToastMessage(message);
        setShowToast(true);
    }

    const editBook = (bookId: string) => {
        if (bookId) {
            setBookId(bookId);
            setShowAddBookModal(true);
        }
    }

    const addBook = () => {
        setBookId("");
        setShowAddBookModal(true);
    }

    const onDeleteBook = async (bookId: string) => {
        if (!bookId) {
            return;
        }

        try {
            if (confirm("Are you sure you want to delete this book?")) {
                await deleteBook(bookId);
                refetch();
                showToaster("Book deleted successfully.", ToastType.SUCCESS);
            }
        } catch (error) {
            showToaster((error as Error).message, ToastType.ERROR);
        }
    }

    const onToasterClose = () => {
        setShowToast(false);
    }

    return <>
        <Header/>

        <main>
            <section className="w-[95%] md:w-[90%] mx-auto mt-5">
                <div className="my-2 flex justify-end">
                    <button
                        onClick={addBook}
                        className="px-4 py-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 flex items-center">
                        <i className="bx bx-plus text-xl"></i>Add a Book
                    </button>
                </div>
                <div className="bg-neutral-800 shadow-md rounded-lg p-2">
                    <BooksTable books={books} editBook={editBook} onDeleteBook={onDeleteBook}/>
                </div>
            </section>
        </main>

        {showAddBookModal &&
            <AddBookModal setShowAddBookModal={setShowAddBookModal} bookId={bookId} refetch={refetch} showToaster={showToaster}/>}

        {showToast && <Toaster message={toastMessage} onClose={onToasterClose} type={toastType}/>}
    </>;
}

export default Home;