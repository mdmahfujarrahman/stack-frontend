import { SidebarItem } from "../../constant";
import { useNavigate } from "react-router-dom";
import { StackImages } from "../../assets";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-center pb-10">
                <img src={StackImages.logo} alt="logo" />
            </div>
            <div className="flex flex-col mx-14">
                <p className="my-4 text-2xl ps-5 text-sidebarText">PAGES</p>
                {SidebarItem.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex items-center h-20 rounded-[16px] text-sidebarText text-2xl py-2 px-5 cursor-pointer ${
                                window.location.pathname.includes(item.route) &&
                                "bg-ternary"
                            }`}
                            onClick={() => {
                                navigate(item.route);
                            }}
                        >
                            <div className="w-6 h-6 mr-3">
                                <img
                                    className="w-full h-full"
                                    src={item.icon}
                                    alt={item.name}
                                />
                            </div>
                            <h4>{item.name}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
