import {useBooks} from "../hooks/useBooks.ts";

const BooksTable = () => {
    const {books, loading, error} = useBooks();

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>Error: {error}</p>;

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
        {books.map(({id, title, author, genre}) => (
            <tr className="odd:bg-gray-700 even:bg-gray-800" key={id}>
                <td className="py-2 px-4">{title}</td>
                <td className="py-2 px-4">{author}</td>
                <td className="py-2 px-4">{genre}</td>
                <td className="py-2 px-4 flex gap-2 items-center">
                    <button title="Edit"
                            className="p-1 md:p-2 rounded-md bg-gray-950  transition duration-200 cursor-pointer">
                        <i className="bx bx-edit text-lg"></i>
                    </button>
                    <button title="Delete"
                            className="p-2 rounded-md bg-amber-950  transition duration-200 cursor-pointer">
                        <i className="bx bx-trash text-lg"></i>
                    </button>
                </td>
            </tr>))}
        </tbody>
    </table>;
}

export default BooksTable;