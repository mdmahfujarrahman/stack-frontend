import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { IToken } from "../../constant/commonTypes";
import MainLayout from "../../components/MainLayout/MainLayout";

const ProtectedRouter: React.FC = () => {
    const auth = {
        token: false,
    };
    const token: IToken = localStorage.getItem("token");
    return auth.token || token ? (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </MainLayout>
    ) : (
        <Navigate to="/" />
    );
};

export default ProtectedRouter;
