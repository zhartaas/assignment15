import React from "react";

const ProgressBar = ({ percentage, barStyling, labelStyling }) => {
    return (
        <div className="flex flex-col items-center ">
            <div className={`relative w-full ${barStyling}`}>
                <div
                    style={{ width: `${percentage}%` }}
                    className="h-4 bg-blue-500 rounded-md"
                ></div>
            </div>
            <span className={`mt-2 ${labelStyling}`}>
                {percentage}% Completed
            </span>
        </div>
    );
};

export default ProgressBar;
