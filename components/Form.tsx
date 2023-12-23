import React, { useState } from "react";
import Input from "./Input";

const Form = ({ formFields, onFormSubmit, labelStyle, inputStyle }) => {
    const initialFormData = Object.fromEntries(
        formFields.map((field) => [field.name, ""])
    );

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="">
            {formFields.map((field) => (
                <div key={field.name} className="mb-4">
                    <label
                        className={`block ${
                            labelStyle || "text-gray-700 text-sm font-bold mb-2"
                        }`}
                        htmlFor={field.name}
                    >
                        {field.label}
                    </label>
                    <Input
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder || ""}
                        styling={inputStyle}
                    />
                </div>
            ))}

            <button
                type="submit"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium text-sm px-5 py-2"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
