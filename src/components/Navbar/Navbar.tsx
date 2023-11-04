import { StackImages } from "../../assets";
import Dropdown from "../../ui/Dropdown/Dropdown";

const Navbar: React.FC = () => {
    return (
        <div className="container px-10 md:px-20 py-7">
            <div className="flex justify-between items-center w-full">
                <img src={StackImages.logo} alt="stcak logo" />
                <Dropdown />
            </div>
        </div>
    );
};

export default Navbar;
