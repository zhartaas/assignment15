import React, { useState } from "react";

const Slider = (props) => {
    return (
        <div className="flex items-center">
            <input
                type="range"
                min="0"
                max="100"
                value={props.value}
                onChange={props.onChange}
                className="slider-thumb bg-blue-500"
            />
        </div>
    );
};

export default Slider;
