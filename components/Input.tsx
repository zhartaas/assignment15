function Input(props) {
    return (
        <input
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={props.styling}
            type={props.type}
        />
    );
}
export default Input;
