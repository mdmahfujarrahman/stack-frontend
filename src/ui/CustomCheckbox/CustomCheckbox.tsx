import { FC } from "react";

interface CustomCheckboxProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    error: boolean;
    checked?: boolean;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
    handleChange,
    label,
    checked,
    name,
    error,
}) => {
    return (
        <div className="my-6 flex relative items-center">
            <div className="custom-checkbox flex items-center">
                <input
                    className="h-7 w-7 bg-checkboxbg border-none rounded-[4px] mr-4"
                    type="checkbox"
                    id="checkbox"
                    name={name}
                    onChange={handleChange}
                    checked={checked}
                />
                <label htmlFor="checkbox"></label>
                <p
                    className={` ms-3 text-xl ${
                        error ? "text-danger" : "text-secondary "
                    }`}
                >
                    {label}
                </p>
            </div>
        </div>
    );
};

export default CustomCheckbox;
