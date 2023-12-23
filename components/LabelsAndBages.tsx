// LabelsAndBadges.js
import React from "react";

const LabelsAndBadges = ({ items, badgeStyling }) => {
    return (
        <div className="flex flex-wrap space-x-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <span className="text-gray-800 font-bold">
                        {item.label}:
                    </span>
                    <span
                        className={`ml-2 px-2 py-1 ${badgeStyling} bg-${item.color}-500 text-white rounded-md`}
                    >
                        {item.badge}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default LabelsAndBadges;
