import { FC, ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default MainLayout;
