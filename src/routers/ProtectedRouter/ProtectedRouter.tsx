import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { IToken } from "../../constant/commonTypes";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useSelector } from "react-redux";
import Toast from "../../ui/Toast/Toast";
import { RootState } from "../../store/store";

const ProtectedRouter: React.FC = () => {
    const { auth } = useSelector((state: RootState) => state);
    const token: IToken = localStorage.getItem("token");

    return auth?.token || token ? (
        <MainLayout>
            <Suspense fallback={<p>Loading</p>}>
                <Toast />
                <Outlet />
            </Suspense>
        </MainLayout>
    ) : (
        <Navigate to="/" />
    );
};

export default ProtectedRouter;
