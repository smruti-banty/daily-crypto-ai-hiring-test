import {Dispatch, SetStateAction} from "react";

type AddBookModalProps = {
    setShowAddBookModal: Dispatch<SetStateAction<boolean>>;
};

const AddBookModal = ({setShowAddBookModal}: AddBookModalProps) => {
    return <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
        <div className="bg-neutral-800 w-[90%] md:w-[40%] rounded-md">
            <div>
                <h4 className="text-center text-xl py-4 px-2 flex items-center justify-center text-gray-100 gap-2">
                    <i className="bx bx-book-reader"></i>
                    Add a book</h4>
            </div>
            <hr className="border-gray-900 px-2"/>
            <div className="my-5">
                <form action="#">
                    <div className="mx-auto flex flex-col items-center justify-center gap-4">
                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-[95%] md:w-[70%]">
                            <i className='bx bx-book-alt text-xl text-gray-500'></i>
                            <input type="text" autoFocus placeholder="Book title"
                                   name="title"
                                   className="w-full outline-none text-sm p-1" required/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-[95%] md:w-[70%]">
                            <i className='bx bx-user text-xl text-gray-500'></i>
                            <input type="text" autoFocus placeholder="Book author"
                                   name="author"
                                   className="w-full outline-none text-sm p-1" required/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-[95%] md:w-[70%]">
                            <i className='bx bx-category text-xl text-gray-500'></i>
                            <input type="text" autoFocus placeholder="Book genre"
                                   name="genre"
                                   className="w-full outline-none text-sm p-1" required/>
                        </div>

                        <div>
                            <div className="flex gap-2">
                                <button type="submit"
                                        className="text-sm bg-gray-900 px-8 py-1 rounded-lg shadow-2xl hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                                    <i className="bx bx-plus text-xl"></i>Add
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