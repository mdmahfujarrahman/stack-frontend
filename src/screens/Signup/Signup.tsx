import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import CustomInput from "../../ui/CustomInput/CustomInput";
import { StackImages } from "../../assets";
import CustomCheckbox from "../../ui/CustomCheckbox/CustomCheckbox";
import CustomButton from "../../ui/CustomButton/CustomButton";
import { validatedInput } from "../../helper/validatedInput";
import { signupStackThunk } from "../../store/actions/authAction/authAction";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError } from "../../store/slices/authSlice/authSlice";
import toast from "react-hot-toast";
import { AppDispatch, RootState } from "../../store/store";

interface IinputData {
    email: string;
    name: string;
    password: string;
    terms: boolean;
    error: Ierror[];
}

export interface Ierror {
    isError: boolean;
    name: string;
}

const Signup: FC = () => {
    const { auth } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const [inputData, setInputData] = useState<IinputData>({
        email: "",
        name: "",
        password: "",
        terms: false,
        error: [
            {
                isError: false,
                name: "",
            },
        ],
    });

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        setInputData((prevInputData) => ({
            ...prevInputData,
            [name]: name === "terms" ? checked : value,
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
        const validate = validatedInput(inputData, isValided, "signup");
        console.log(validate);
        if (validate === true) {
            dispatch(
                signupStackThunk({
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
        <div className="flex flex-col justify-center  py-4">
            <AuthHeader
                title="Getting Started"
                subtitle="Create an account to continue!"
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
                    icon={StackImages.nameIcon}
                    name="name"
                    placeholder="Your Name"
                    handleBlur={handleBlur}
                    error={
                        inputData.error.find((item) => item.name === "name")
                            ?.isError
                            ? "Please enter a name"
                            : ""
                    }
                />
                <CustomInput
                    handleChange={handleChange}
                    icon={StackImages.lock}
                    name="password"
                    type="password"
                    value={inputData?.password}
                    handleBlur={handleBlur}
                    placeholder="Create password"
                    error={
                        inputData.error.find((item) => item.name === "password")
                            ?.isError
                            ? "Please enter your password"
                            : ""
                    }
                />
                <CustomCheckbox
                    error={
                        inputData.error.find((item) => item.name === "terms")
                            ?.isError
                            ? true
                            : false
                    }
                    name="terms"
                    label="I agree to the Terms & Conditions"
                    handleChange={handleChange}
                    checked={inputData.terms}
                />
                <CustomButton btnClass="bg-btnbackground py-5 my-5 flex items-center justify-center text-xl text-white">
                    {auth.isLoading ? (
                        <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white" />
                    ) : (
                        "Sign Up"
                    )}
                </CustomButton>
                <div className="my-4 flex items-center justify-center text-xl">
                    <p>Already have an account?&nbsp;</p>
                    <span
                        className="text-btnbackground cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        Sign In
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Signup;
