import { FC, ReactNode } from "react";

interface CustomButtonProps {
    btnClass?: string;
    handleClick?: () => void;
    children: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
    btnClass,
    handleClick,
    children,
}) => {
    return (
        <button
            onClick={handleClick}
            type="submit"
            className={`rounded-[16px]  w-full ${btnClass ? btnClass : ""}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;
