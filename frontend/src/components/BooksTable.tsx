import {Book} from "../models/Book.ts";

type BooksTableProps = {
    editBook: (bookId: string) => void;
    books: Book[];
    onDeleteBook: (bookId: string) => Promise<void>;
}

const BooksTable = ({editBook, books, onDeleteBook}: BooksTableProps) => {

    return <table className="w-full text-white bg-gray-900">
        <thead className="bg-gray-800">
        <tr>
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Author</th>
            <th className="py-2 px-4 text-left">Genre</th>
            <th className="py-2 px-4 text-left">Action</th>
        </tr>
        </thead>

        <tbody>
        {books.map(({_id, title, author, genre}) => (
            <tr className="odd:bg-gray-700 even:bg-gray-800" key={_id}>
                <td className="py-2 px-4">{title}</td>
                <td className="py-2 px-4">{author}</td>
                <td className="py-2 px-4">{genre}</td>
                <td className="py-2 px-4 flex gap-2 items-center">
                    <button title="Edit"
                            onClick={() => editBook(_id || "")}
                            className="p-1 md:p-2 rounded-md bg-gray-950  transition duration-200 cursor-pointer">
                        <i className="bx bx-edit text-lg"></i>
                    </button>
                    <button title="Delete"
                            onClick={() => onDeleteBook(_id || "")}
                            className="p-2 rounded-md bg-amber-950  transition duration-200 cursor-pointer">
                        <i className="bx bx-trash text-lg"></i>
                    </button>
                </td>
            </tr>))}
        </tbody>
    </table>;
}

export default BooksTable;