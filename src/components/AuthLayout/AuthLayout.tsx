import { ReactNode, FC } from "react";
import Navbar from "../Navbar/Navbar";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center py-4">
                <div className="flex items-center justify-center w-full md:w-2/3">
                    {children}
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
