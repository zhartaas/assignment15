"use client";

import { useEffect, useState } from "react";

const Select = (props) => {
    return (
        <select value={props.selectedOption} onChange={props.onChange}>
            {props.options.map((option) => (
                <option
                    className="text-black px-3 py-4"
                    key={option.value}
                    value={option.value}
                >
                    {option.text}
                </option>
            ))}
        </select>
    );
};

export default Select;
