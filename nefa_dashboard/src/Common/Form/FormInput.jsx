import React from "react";

const FormInput = ({ value, handleOnChange, placeholder, label }) => {
    return (
        <React.Fragment>
            <div>
                <label
                    htmlFor=""
                    className="font-medium font-primary text-black text-xl ">
                    {label}
                </label>
                <input
                    type={"text"}
                    value={value}
                    onChange={(e) => handleOnChange(e.target.value)}
                    placeholder={placeholder}
                    className="border w-full border-gray placeholder-[#C3C3C3] focus:border-blue file:bg-blue file:border-0 file:text-white file:rounded p-1 rounded"
                />
            </div>
        </React.Fragment>
    );

}
export default FormInput;