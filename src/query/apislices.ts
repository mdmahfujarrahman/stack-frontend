import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./common";

const api = createApi({
    baseQuery,
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (page = 1, per_page = 7) =>
                `/users?page=${page}&per_page=${per_page}`,
        }),
    }),
});

export const { useGetUserQuery } = api;

export default api;
