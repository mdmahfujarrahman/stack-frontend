import CustomButton from "../../ui/CustomButton/CustomButton";
import { StackImages } from "../../assets/index";

interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="flex items-center flex-col justify-center">
            <h2 className="text-3xl font-bold mb-5">{title}</h2>
            <p className="text-xl text-textColor mb-5">{subtitle}</p>
            <div className="flex items-center flex-col md:flex-row w-full gap-6 mb-6">
                <CustomButton btnClass="flex text-xl  w-10/12 text-textColor justify-center items-center bg-ternary py-5">
                    <img src={StackImages.google} alt="Google icon" />
                    <p className="ml-4">Sign Up with Google</p>
                </CustomButton>
                <CustomButton btnClass="flex text-xl text-textColor w-10/12 text-text Color justify-center items-center bg-ternary py-5">
                    <img src={StackImages.apple} alt="Apple icon" />
                    <p className="ml-4">Sign Up with Apple ID</p>
                </CustomButton>
            </div>
            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <div className="h-[2px] border-t-1 bg-ternary w-80"></div>
                    <p className="text-xl text-secondary">OR</p>
                    <div className="h-[2px] border-t-1 bg-ternary w-80"></div>
                </div>
            </div>
        </div>
    );
};

export default AuthHeader;
