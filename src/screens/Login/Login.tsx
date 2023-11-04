import { useState, FC, useEffect } from "react";
import CustomCheckbox from "../../ui/CustomCheckbox/CustomCheckbox";
import CustomButton from "../../ui/CustomButton/CustomButton";
import CustomInput from "../../ui/CustomInput/CustomInput";
import { StackImages } from "../../assets";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useNavigate } from "react-router-dom";
import { validatedInput } from "../../helper/validatedInput";
import { loginStackThunk } from "../../store/actions/authAction/authAction";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearAuthError } from "../../store/slices/authSlice/authSlice";
import { AppDispatch, RootState } from "../../store/store";

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
    const { auth } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
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
        const isValided: Ierror[] = [];
        const validate = validatedInput(inputData, isValided, "login");
        console.log(validate);
        if (validate === true) {
            dispatch(
                loginStackThunk({
                    email: inputData.email,
                    password: inputData.password,
                })
            );
        } else {
            setInputData((prevInputData) => ({
                ...prevInputData,
                error: isValided,
            }));
        }
    };

    useEffect(() => {
        if (auth.token) {
            navigate("/dashboard");
        }
        if (auth.error.msg) {
            toast.error(auth.error.msg);

            setTimeout(() => {
                dispatch(clearAuthError);
            }, 1000);
        }
    }, [auth.token, auth.error]);

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
                        inputData.error.find((item) => item.name === "password")
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
                <CustomButton btnClass="bg-btnbackground py-5 my-4 text-xl text-white flex items-center justify-center">
                    {auth.isLoading ? (
                        <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white" />
                    ) : (
                        "Login"
                    )}
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
