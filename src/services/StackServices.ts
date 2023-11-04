import API from "./common";
import { ILoginPayload, ISignupPayload } from "./servicesType";

const getLogin = async (payload: ILoginPayload) => {
    return await API.post("/login", payload);
};

const getSignup = async (payload: ISignupPayload) => {
    return await API.post("/signup", payload);
};

export const StackServices = {
    getLogin,
    getSignup,
};

// interface IStackServices
