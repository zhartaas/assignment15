import React from "react";

const Card = (props) => {
    return <div className={props.cardStyling}>{props.children}</div>;
};

export default Card;
