const TextArea = (props) => {
    return (
        <textarea
            value={props.value}
            onChange={props.onChange}
            rows="3"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
            placeholder={props.placeholder}
        ></textarea>
    );
};

export default TextArea;
