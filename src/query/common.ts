import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://reqres.in/api";

export const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
