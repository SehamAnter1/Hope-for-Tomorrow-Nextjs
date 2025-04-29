
const Input = ({label, type, placeholder, from, error, disabled, inputValue, handleChange, className, min}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                disabled={disabled}
                min={min}
                className={`input_container w-full input-field  ${error ? "input-error" : ""} ${className} `}
            />
        </>
    );
};

export default Input;
