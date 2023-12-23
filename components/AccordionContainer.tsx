// AccordionContainer.tsx
import React, { useState } from "react";

const AccordionContainer = ({ title, children, containerStyling }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={containerStyling}>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="w-6 h-6 transform transition-transform">
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default AccordionContainer;
