const Checkbox = (props) => {
    return (
        <label>
            <input
                className={props.styling}
                value={props.value}
                onChange={props.onChange}
                type="checkbox"
            />
        </label>
    );
};

export default Checkbox;
