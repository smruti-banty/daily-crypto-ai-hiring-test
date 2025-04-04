import Header from "../components/Header.tsx";
import AddBookModal from "../components/AddBookModal.tsx";
import {useState} from "react";
import BooksTable from "../components/BooksTable.tsx";

const Home = () => {
    const [showAddBookModal, setShowAddBookModal] = useState(false);

    return <>
        <Header/>

        <main>
            <section className="w-[95%] md:w-[90%] mx-auto mt-5">
                <div className="my-2 flex justify-end">
                    <button
                        onClick={() => setShowAddBookModal(true)}
                        className="px-4 py-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 flex items-center">
                        <i className="bx bx-plus text-xl"></i>Add a Book
                    </button>
                </div>
                <div className="bg-neutral-800 shadow-md rounded-lg p-2">
                    <BooksTable/>
                </div>
            </section>
        </main>

        {showAddBookModal && <AddBookModal setShowAddBookModal={setShowAddBookModal}/>}
    </>;
}

export default Home;