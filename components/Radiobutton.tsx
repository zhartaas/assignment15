const Radiobutton = (props) => {
    return (
        <>
            <input
                id={props.id}
                className={props.styling}
                type="radio"
                onChange={props.onChange}
                value={props.value}
                checked={props.isSelected}
            />
        </>
    );
};

export default Radiobutton;
