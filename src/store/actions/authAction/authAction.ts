import { createAsyncThunk } from "@reduxjs/toolkit";
import { StackServices } from "../../../services/StackServices";
import { ILoginPayload, ISignupPayload } from "../../../services/servicesType";

export const loginStackThunk = createAsyncThunk(
    "stack/login",
    async (payload: ILoginPayload, thunkAPI) => {
        const res = await StackServices.getLogin(payload)
            .then((res) => {
                console.log(res);
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const signupStackThunk = createAsyncThunk(
    "stack/signip",
    async (payload: ISignupPayload, thunkAPI) => {
        const res = await StackServices.getSignup(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
