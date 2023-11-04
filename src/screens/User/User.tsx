import React, { useState } from "react";
import { useGetUserQuery } from "../../query/apislices";
import { StackImages } from "../../assets";

type Iuser = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

const User: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useGetUserQuery(currentPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };
    console.log(data);
    return (
        <div className="py-12 ">
            <div className="my-6">
                <h2 className="text-4xl text-primary text-bold">User List</h2>
            </div>
            <div>
                <table className="table-fixed w-full ">
                    <thead>
                        <tr className="bg-ternary rounded-[12px]">
                            <th className="px-4 py-3 w-1/6">#ID</th>
                            <th className="px-4 py-3 text-left">USER </th>
                            <th className="px-4 py-3 text-left">EMAIL</th>
                            <th className="px-4 py-3">OPTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.map((user: Iuser) => (
                            <tr key={user.id} className="bg-white">
                                <td className="px-4 py-4 w-1/6 text-2xl text-center">
                                    {user.id}
                                </td>
                                <td className="px-4 py-4 flex text-left">
                                    <img
                                        className="h-10 w-10 rounded-[15px] mr-5"
                                        src={user?.avatar}
                                        alt=""
                                    />
                                    <p className="text-primar text-2xl">
                                        {user.first_name + user.last_name}
                                    </p>
                                </td>
                                <td className="px-4 py-4 text-2xl text-left">
                                    {user.email}
                                </td>
                                <td className="px-4 py-4 text-center cursor-pointer">
                                    ...
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col lg:flex-row justify-between my-6 text-ternary">
                {" "}
                <div
                    aria-label="Pagination"
                    className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
                >
                    {" "}
                    <p
                        onClick={() => setCurrentPage(1)}
                        className="p-2 mr-4 rounded hover:bg-gray-100"
                    >
                        {" "}
                        <img src={StackImages.first} alt="first" />
                    </p>{" "}
                    <p
                        onClick={() => {
                            if (currentPage > 1) {
                                prevPage();
                            }
                        }}
                        className="p-2 mr-4 rounded hover:bg-gray-100"
                    >
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                            />{" "}
                        </svg>{" "}
                    </p>{" "}
                    {[...Array(data?.total_pages)].map((_, index) => {
                        return (
                            <p
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 rounded hover:bg-gray-100 cursor-pointer ${
                                    currentPage === index + 1 && "bg-gray-100"
                                }}`}
                            >
                                {index + 1}
                            </p>
                        );
                    })}
                    <p
                        onClick={() => {
                            if (nextPage > data?.total_pages) {
                                prevPage();
                            }
                        }}
                        className="p-2 ml-4 rounded hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </p>
                    <p
                        onClick={() => setCurrentPage(data?.total_pages)}
                        className="p-2 ml-4 rounded hover:bg-gray-100"
                    >
                        <img src={StackImages.last} alt="last" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;
