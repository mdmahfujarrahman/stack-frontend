import { Navigate, Outlet } from "react-router-dom";
import { IToken } from "../../constant/commonTypes";
import AuthLayout from "../../components/AuthLayout/AuthLayout";

const UnProtectedRouter: React.FC = () => {
    const token: IToken = localStorage.getItem("token");
    return !token ? (
        <Navigate to="/dashboard" />
    ) : (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    );
};

export default UnProtectedRouter;
