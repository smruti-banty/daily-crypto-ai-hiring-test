import { useEffect } from "react";
import {ToastType} from "../models/ToastType.ts";

type ToasterProps = {
    message: string;
    type?: ToastType;
    onClose: () => void;
};

const Toaster = ({ message, type = ToastType.INFO, onClose }: ToasterProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000); // Auto close after 5 sec
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [onClose]);

    const typeClasses = {
        success: "bg-green-500 border-green-700",
        error: "bg-red-500 border-red-700",
        info: "bg-gray-500 border-gray-700",
        warning: "bg-yellow-500 border-yellow-700",
    };

    return (
        <div
            className={`fixed top-5 right-5 text-white px-4 py-3 rounded-md shadow-lg border-l-4 ${typeClasses[type]} flex items-center justify-between w-[300px]`}
        >
            <span>{message}</span>
            <button onClick={onClose} className="ml-3 text-xl font-bold cursor-pointer">×</button>
        </div>
    );
};

export default Toaster;
