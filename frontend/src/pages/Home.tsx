import Header from "../components/Header.tsx";
import AddBookModal from "../components/AddBookModal.tsx";
import {useState} from "react";
import BooksTable from "../components/BooksTable.tsx";
import {useBooks} from "../hooks/useBooks.ts";
import {deleteBook} from "../services/books.service.ts";

const Home = () => {
    const [showAddBookModal, setShowAddBookModal] = useState(false);
    const [bookId, setBookId] = useState("");
    const {books, refetch} = useBooks();

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
            await deleteBook(bookId);
            refetch();
        } catch (error) {
            console.error(error);
        }
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

        {showAddBookModal && <AddBookModal setShowAddBookModal={setShowAddBookModal} bookId={bookId} refetch={refetch}/>}
    </>;
}

export default Home;