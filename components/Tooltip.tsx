// Tooltip.js
import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <div className="tooltip-text bg-gray-800 text-white text-sm font-sans p-4 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
