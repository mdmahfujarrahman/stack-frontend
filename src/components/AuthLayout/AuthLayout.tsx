import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main>
            <Navbar />
            <div>{children}</div>
        </main>
    );
};

export default AuthLayout;
