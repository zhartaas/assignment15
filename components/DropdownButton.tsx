import { useState, useEffect } from "react";
import Button from "./Button";

const DropdownButton = (props) => {
    const [dropdown, setDropdown] = useState(false);

    const click = () => {
        console.log("click");
    };

    const [ulStyling, setUlStyling] = useState("flex flex-col max-w-max mt-3");

    return (
        <>
            {/* main button */}
            <div>
                <Button
                    styling={props.mainButtonStyling}
                    buttonText={props.dropdownParams.title}
                    onClick={() => setDropdown((prev) => !prev)}
                ></Button>
                {/* dropdown */}
                <ul
                    className={
                        ulStyling + (dropdown === false ? " hidden" : "")
                    }
                >
                    {props.dropdownParams.submenu.map((submenu, index) => (
                        <li key={index}>
                            <Button
                                styling={
                                    props.dropdownParams.submenuButtonStyling
                                }
                                onClick={submenu.onClick}
                                buttonText={submenu.title}
                                value={submenu.title}
                            ></Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DropdownButton;
