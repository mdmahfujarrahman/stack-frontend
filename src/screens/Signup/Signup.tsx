import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import CustomInput from "../../ui/CustomInput/CustomInput";
import { StackImages } from "../../assets";
import CustomCheckbox from "../../ui/CustomCheckbox/CustomCheckbox";
import CustomButton from "../../ui/CustomButton/CustomButton";

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
        const { email, name, password, terms } = inputData;
        if (
            email.length === 0 ||
            name.length === 0 ||
            password.length === 0 ||
            !terms
        ) {
            setInputData((prevInputData) => ({
                ...prevInputData,
                error: [
                    {
                        isError: true,
                        name: "email",
                    },
                    {
                        isError: true,
                        name: "name",
                    },
                    {
                        isError: true,
                        name: "password",
                    },
                    {
                        isError: true,
                        name: "terms",
                    },
                ],
            }));
        }
    };

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
                <CustomButton btnClass="bg-btnbackground py-5 my-5 text-xl text-white">
                    Sign Up
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
