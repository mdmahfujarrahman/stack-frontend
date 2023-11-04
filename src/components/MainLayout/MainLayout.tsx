import { FC, ReactNode } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import Sidebar from "../Sidebar/Sidebar";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex relative">
            <div className="flex h-screen w-1/5 pt-6 border-r-2 border-ternary">
                <Sidebar />
            </div>
            <div className="w-4/5 pt-6 px-10">
                <DashboardNavbar /> {children}
            </div>
        </div>
    );
};

export default MainLayout;
