
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
                className={` placeholder:!text-light-gray-secondary w-full input-field  ${
                    error ? "text-red-700" : ""
                } ${className} `}
            />
        </>
    );
};

export default Input;
