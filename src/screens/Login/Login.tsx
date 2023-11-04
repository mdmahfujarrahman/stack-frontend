import { useState, FC } from "react";
import CustomCheckbox from "../../ui/CustomCheckbox/CustomCheckbox";
import CustomButton from "../../ui/CustomButton/CustomButton";
import CustomInput from "../../ui/CustomInput/CustomInput";
import { StackImages } from "../../assets";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useNavigate } from "react-router-dom";

interface IinputData {
    email: string;
    password: string;
    remember: boolean;
    error: Ierror[];
}

export interface Ierror {
    isError: boolean;
    name: string;
}

const Login: FC = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<IinputData>({
        email: "",
        password: "",
        remember: false,
        error: [
            {
                isError: false,
                name: "",
            },
        ],
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        setInputData((prevInputData) => ({
            ...prevInputData,
            [name]: name === "remember" ? checked : value,
            error: prevInputData.error.filter((item) => item.name !== name),
        }));
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (value.length === 0) {
            const error = inputData.error.filter((item) => item.name !== name);
            setInputData((prevInputData) => ({
                ...prevInputData,
                error: error,
            }));
            setInputData((prevInputData) => ({
                ...prevInputData,
                error: [
                    ...prevInputData.error,
                    {
                        isError: true,
                        name: name,
                    },
                ],
            }));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password, remember } = inputData;
        if (email.length === 0 || password.length === 0 || !remember) {
            setInputData((prevInputData) => ({
                ...prevInputData,
                error: [
                    {
                        isError: true,
                        name: "email",
                    },
                    {
                        isError: true,
                        name: "password",
                    },
                    {
                        isError: true,
                        name: "remember",
                    },
                ],
            }));
        }
    };
    return (
        <div className="flex flex-col justify-center   py-4">
            <AuthHeader
                title="Sign In"
                subtitle="Welcome back, you’ve been missed!"
            />
            <form onSubmit={handleSubmit}>
                <CustomInput
                    handleChange={handleChange}
                    icon={StackImages.email}
                    name="email"
                    placeholder="Your Email"
                    handleBlur={handleBlur}
                    error={
                        inputData.error.find((item) => item.name === "email")
                            ?.isError
                            ? "Please enter a email Address"
                            : ""
                    }
                />
                <CustomInput
                    handleChange={handleChange}
                    icon={StackImages.lock}
                    name="password"
                    type="password"
                    handleBlur={handleBlur}
                    placeholder="Password"
                    error={
                        inputData.error.find((item) => item.name === "Password")
                            ?.isError
                            ? "Please enter your password"
                            : ""
                    }
                />
                <CustomCheckbox
                    error={
                        inputData.error.find((item) => item.name === "remember")
                            ?.isError
                            ? true
                            : false
                    }
                    name="remember"
                    label="Remember Me"
                    handleChange={handleChange}
                />
                <CustomButton btnClass="bg-btnbackground py-5 my-4 text-xl text-white">
                    Sign In
                </CustomButton>
                <div className="my-4 flex items-center justify-center text-xl">
                    <p>Don’t have an account yet?&nbsp;</p>
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-btnbackground cursor-pointer"
                    >
                        Sign Up
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
