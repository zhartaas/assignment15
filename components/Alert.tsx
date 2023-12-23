import React from "react";

const Alert = ({ type, message, onClose }) => {
    const handleClose = () => {
        onClose && onClose();
    };

    return (
        <div
            className={`alert-container p-4 mb-4 rounded-md ${
                type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
        >
            <span className="mr-2">
                {type === "success" ? "Success:" : "Error:"}
            </span>
            {message}
            <button
                className="alert-close-button float-right px-2 py-1 bg-white text-gray-700 rounded-md focus:outline-none hover:bg-gray-200"
                onClick={handleClose}
            >
                Close
            </button>
        </div>
    );
};

export default Alert;
