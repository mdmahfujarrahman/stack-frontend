import { createSlice } from "@reduxjs/toolkit";
import {
    loginStackThunk,
    signupStackThunk,
} from "../../actions/authAction/authAction";
import { IinitialState } from "../constant/types";

const initialState: IinitialState = {
    token: null,
    user: null,
    error: {
        isError: false,
        msg: "",
    },
    isLoading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutAction: (state) => {
            state.token = null;
            state.user = null;
            localStorage.clear();
        },
        clearAuthError: (state) => {
            state.error = {
                isError: false,
                msg: "",
            };
        },
    },
    extraReducers: (builder) => {
        // login reducers
        builder.addCase(loginStackThunk.pending, (state) => {
            state.isLoading = true;
            state.error = {
                isError: false,
                msg: "",
            };
        });
        builder.addCase(loginStackThunk.fulfilled, (state, action) => {
            const data = action.payload;
            state.token = data?.token;
            localStorage.setItem("token", data?.token);
            state.error = {
                isError: false,
                msg: "",
            };
            state.isLoading = false;
        });
        builder.addCase(loginStackThunk.rejected, (state) => {
            state.error = {
                isError: true,
                msg: "User  not found",
            };
            state.isLoading = false;
        });
        // sign up reducers
        builder.addCase(signupStackThunk.pending, (state) => {
            state.isLoading = true;
            state.error = {
                isError: false,
                msg: "",
            };
        });
        builder.addCase(signupStackThunk.fulfilled, (state, action) => {
            const data = action.payload;
            console.log(data);
            state.token = data?.id;
            state.user = data;
            localStorage.setItem("token", data?.id);
            state.error = {
                isError: false,
                msg: "",
            };
            state.isLoading = false;
        });
        builder.addCase(signupStackThunk.rejected, (state, action) => {
            console.log(action);
            state.error = {
                isError: true,
                msg: "Something went wrong",
            };
            state.isLoading = false;
        });
    },
});

export const { logoutAction, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
