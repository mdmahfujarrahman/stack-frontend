import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter";
import UnProtectedRouter from "./UnProtectedRouter/UnProtectedRouter";
import Dashboard from "../screens/Dashboard/Dashboard";
import User from "../screens/User/User";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import Sales from "../screens/Sales/Sales";

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<ProtectedRouter />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/sales" element={<Sales />} />
                </Route>
                <Route element={<UnProtectedRouter />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterComponent;
