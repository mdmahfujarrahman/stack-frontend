import { createAsyncThunk } from "@reduxjs/toolkit";
import AspireService from "../../../services/aspireService";

export const getCountsThunk = createAsyncThunk(
    "aspire/count",
    async (payload, thunkAPI) => {
        const res = await AspireService.getCountsReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getRecendSoldsThunk = createAsyncThunk(
    "aspire/recentSold",
    async (payload, thunkAPI) => {
        const res = await AspireService.getRecentSoldReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getProjectsLeftThunk = createAsyncThunk(
    "aspire/projectsLeft",
    async (payload, thunkAPI) => {
        const res = await AspireService.getProjectsLeftReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getProjectWiseSalesThunk = createAsyncThunk(
    "aspire/projectWiseSales",
    async (payload, thunkAPI) => {
        const res = await AspireService.getProjectWiseSaleReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getUpcomingPaymentThunk = createAsyncThunk(
    "aspire/upcomingPayment",
    async (payload, thunkAPI) => {
        const res = await AspireService.getUpcomingPaymentReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getOverduePaymentThunk = createAsyncThunk(
    "aspire/overduePayment",
    async (payload, thunkAPI) => {
        const res = await AspireService.getOverduePaymentReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getSalesGraphThunk = createAsyncThunk(
    "aspire/salesGraph",
    async (payload, thunkAPI) => {
        const res = await AspireService.getSalesGraphReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
export const getRevenueGraphThunk = createAsyncThunk(
    "aspire/revenueGraph",
    async (payload, thunkAPI) => {
        const res = await AspireService.getRevenueGraphReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);

export const getPaymentGraphThunk = createAsyncThunk(
    "aspire/paymentGraph",
    async (payload, thunkAPI) => {
        const res = await AspireService.getPaymentGraphReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);

export const getSalesProjectListThunk = createAsyncThunk(
    "aspire/salesProjectList",
    async (payload, thunkAPI) => {
        const res = await AspireService.getSalesProjectListReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);

export const getRevenueProjectListThunk = createAsyncThunk(
    "aspire/salesRevenueList",
    async (payload, thunkAPI) => {
        const res = await AspireService.getRevenueProjectListReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);

export const getPaymentProjectListThunk = createAsyncThunk(
    "aspire/salesPaymentList",
    async (payload, thunkAPI) => {
        const res = await AspireService.getPaymentProjectListReq(payload)
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);
