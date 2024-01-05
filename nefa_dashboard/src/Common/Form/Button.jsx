const Button = ({ btnName, handleOnClick, disabled, btnColor }) => {
    return (
        <button
            disabled={disabled}
            type="submit"
            className={`rounded py-2 px-6 font-primary font-medium text-base uppercase shadow shadow-[#00000040] text-white ${btnColor ? btnColor : "bg-primary"} `}
            onClick={handleOnClick}
        >
            {btnName || "Submit"}
        </button>
    );
}
export default Button;