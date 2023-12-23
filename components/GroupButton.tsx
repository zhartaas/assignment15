"use client";
import { useEffect } from "react";
import Button from "./Button";

const GroupButton = (props) => {
    useEffect(() => {
        console.log(props.buttons);
    }, []);

    return (
        <span className="inline-flex">
            {props.buttons.map((button) => (
                <Button
                    key={button.title}
                    styling={props.styling}
                    onClick={button.onClick}
                    buttonText={button.title}
                ></Button>
            ))}
        </span>
    );
};

export default GroupButton;
