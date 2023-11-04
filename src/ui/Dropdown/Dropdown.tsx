import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { languageOptions } from "../constant/Index";

const Dropdown: React.FC = () => {
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex items-center w-full justify-center rounded-[16px] bg-ternary px-10 py-5 text-xl font-medium text-secondary  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        English (UK)
                        <ChevronDownIcon
                            className="ml-4 -mr-1 h-6 w-6 text-secondary "
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {languageOptions.map((option) => (
                            <Menu.Item key={option.key}>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? "bg-ternary "
                                                : "text-secondary"
                                        } group flex w-full items-center rounded-md px-4 py-4 text-xl`}
                                    >
                                        {option.text}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default Dropdown;
