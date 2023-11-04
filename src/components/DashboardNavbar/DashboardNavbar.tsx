import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// assets
import { StackImages } from "../../assets";

import SearchInput from "../SearchInput/SearchInput";
// actions
import { logoutAction } from "../../store/slices/authSlice/authSlice";

const DashboardNavbar: React.FC = () => {
    const navigate = useNavigate();
    const dipatch = useDispatch();

    const handleLogout = () => {
        navigate("/");
        dipatch(logoutAction());
    };

    return (
        <div className="flex items-center justify-between">
            <SearchInput />
            <div className="flex items-center gap-11">
                <img src={StackImages.notification} alt="notification" />
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={`
                            ${open ? "text-white" : "text-white/90"}
                            group inline-flex items-center rounded-md  px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                            >
                                <img
                                    className="rounded-full cursor-pointer"
                                    src={StackImages.profile}
                                    alt="profile"
                                />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-0 z-10 mt-3 w-60 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                        <div
                                            onClick={handleLogout}
                                            className="relative grid gap-8 bg-white hover:bg-ternary cursor-pointer p-7 lg:grid-cols-2"
                                        >
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </div>
    );
};

export default DashboardNavbar;
