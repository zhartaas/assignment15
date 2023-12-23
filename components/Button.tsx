import { useEffect } from "react";

const Button = (props) => {
    useEffect(() => {
        console.log(props.styling);
    }, []);
    return (
        <button
            className={props.styling}
            onClick={props.onClick}
            type="button"
            value={props.buttonText}
        >
            {props.buttonText}
        </button>
    );
};

export default Button;
