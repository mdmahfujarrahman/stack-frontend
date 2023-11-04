import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/authSlice";
import api from "../query/apislices";
//combine all reducers
const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authReducer,
});

//store
export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;