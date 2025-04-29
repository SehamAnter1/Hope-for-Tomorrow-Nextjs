
const Textarea = ({label, placeholder, from, error, disabled, inputValue, handleChange, className}) => {
    return (
        <>
            <textarea
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                disabled={disabled}
                className={` w-full textarea-field ${className}`}
            />
        </>
    );
};

export default Textarea;
