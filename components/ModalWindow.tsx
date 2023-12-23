import React, { useState } from "react";

const ModalWindow = ({ isOpen, onClose, children }) => {
    const handleClose = () => {
        onClose && onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-container p-4 bg-white rounded-md">
                        <div className="modal-content">{children}</div>
                        <button
                            className="modal-close-button bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalWindow;
