import {Dispatch, SetStateAction, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Book} from "../models/Book.ts";
import {createBook, getBookById, updateBook} from "../services/books.service.ts";

type AddBookModalProps = {
    setShowAddBookModal: Dispatch<SetStateAction<boolean>>,
    bookId?: string,
    refetch: () => Promise<void>
};

const AddBookModal = ({setShowAddBookModal, bookId, refetch}: AddBookModalProps) => {
    const pageTitle = bookId ? 'Edit' : 'Add';

    const {register, handleSubmit, reset} = useForm<Book>({
        shouldUseNativeValidation: true,
        defaultValues: {
            _id: "",
            title: "",
            author: "",
            genre: ""
        }
    });

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await getBookById(bookId as string);
                if (response?.data) {
                    reset(response.data); // Update form with API data
                }
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        };
        if (bookId) {
            fetchBook();
        } else {
            reset();
        }
    }, [bookId, reset]);

    const onSubmit = async (data: Book) => {
        // For book add case
        if (!data._id) {
            await createBook(data);
        } else {
            await updateBook(data._id, data);
        }

        refetch();
        setShowAddBookModal(false);
    };

    return <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
        <div className="bg-neutral-800 w-[90%] md:w-[40%] rounded-md">
            <div>
                <h4 className="text-center text-xl py-4 px-2 flex items-center justify-center text-gray-100 gap-2">
                    <i className="bx bx-book-reader"></i>
                    {pageTitle} a book</h4>
            </div>
            <hr className="border-gray-900 px-2"/>
            <div className="my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mx-auto flex flex-col items-center justify-center gap-4">
                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-[95%] md:w-[70%]">
                            <i className='bx bx-book-alt text-xl text-gray-500'></i>
                            <input type="text" autoFocus placeholder="Book title"
                                   className="w-full outline-none text-sm p-1"
                                   {...register("title", {required: true})}/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-[95%] md:w-[70%]">
                            <i className='bx bx-user text-xl text-gray-500'></i>
                            <input type="text" autoFocus placeholder="Book author"
                                   className="w-full outline-none text-sm p-1"
                                   {...register("author", {required: true})}/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-[95%] md:w-[70%]">
                            <i className='bx bx-category text-xl text-gray-500'></i>
                            <input type="text" autoFocus placeholder="Book genre"
                                   className="w-full outline-none text-sm p-1"
                                   {...register("genre", {required: true})}/>
                        </div>

                        <div>
                            <div className="flex gap-2">
                                <button type="submit"
                                        className="text-sm bg-gray-900 px-8 py-1 rounded-lg shadow-2xl hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                                    <i className="bx bx-plus text-xl"></i>{pageTitle}
                                </button>

                                <button type="button"
                                        onClick={() => setShowAddBookModal(false)}
                                        className="text-sm bg-gray-800 px-8 py-1 rounded-lg shadow-2xl hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                                    <i className="bx bx-exit text-xl"></i>Close
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default AddBookModal;