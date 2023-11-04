import React, { FC } from "react";

interface ICustomInputProps {
    placeholder: string;
    type?: string;
    icon: string;
    error?: string;
    inputClass?: string;
    value?: string;
    name: string;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<ICustomInputProps> = ({
    placeholder,
    inputClass,
    type,
    icon,
    value,
    error,
    name,
    handleBlur,
    handleChange,
}) => {
    console.log(value);
    return (
        <div className="flex flex-col mb-6 w-full relative">
            <div
                className={`flex border w-full  px-5 py-5 rounded-[16px] ${
                    error ? "border-danger" : ""
                }`}
            >
                <img src={icon} alt="placeholder" />
                <input
                    className={`w-full ml-3 bg-transparent outline-none text-textColor ${
                        inputClass ? inputClass : ""
                    }`}
                    defaultValue={value}
                    type={type ? type : "text"}
                    placeholder={placeholder}
                    onChange={handleChange}
                    name={name}
                    onBlur={handleBlur}
                />
            </div>
            {error && <p className="my-3 text-danger">{error}</p>}
            {type === "password" && value && value?.length > 0 && (
                <div className="flex w-full items-center gap-3 my-6">
                    <p
                        className={`h-1 w-[15%] border-t-1 ${
                            value?.length >= 2 ? "bg-success" : "bg-danger"
                        }`}
                    ></p>
                    <p
                        className={`h-1 w-[15%] border-t-1 ${
                            value?.length >= 4 ? "bg-success" : "bg-danger"
                        }`}
                    ></p>
                    <p
                        className={`h-1 w-[15%] border-t-1 ${
                            value?.length >= 5 ? "bg-success" : "bg-danger"
                        }`}
                    ></p>
                    <p
                        className={`h-1 w-[15%] border-t-1 ${
                            value?.length >= 6 ? "bg-success" : "bg-ternary"
                        }`}
                    ></p>
                    <p
                        className={`h-1 w-[15%] border-t-1 ${
                            value?.length >= 7 ? "bg-success" : "bg-ternary"
                        }`}
                    ></p>
                    <p
                        className={`h-1 w-[15%] border-t-1 ${
                            value?.length >= 8 ? "bg-success" : "bg-ternary"
                        }`}
                    ></p>
                </div>
            )}
        </div>
    );
};

export default CustomInput;
