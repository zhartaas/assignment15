// MessageBox.js
import React from "react";
import Button from "./Button";

const MessageBox = ({ message, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="message-box p-8 bg-white rounded-md">
                <div className="mb-4">{message}</div>
                <Button
                    styling="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    onClick={onClose}
                    buttonText="Close"
                />
            </div>
        </div>
    );
};

export default MessageBox;
