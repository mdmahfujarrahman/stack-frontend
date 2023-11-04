import API from "./common";
import {
    ILoginPayload,
    ILoginResponse,
    ISignupPayload,
    ISignupResponse,
} from "./servicesType";

const getLogin = async (payload: ILoginPayload): Promise<ILoginResponse> => {
    return await API.post("/login", payload);
};

const getSignup = async (payload: ISignupPayload): Promise<ISignupResponse> => {
    return await API.post("/signup", payload);
};

export const StackServices: IStackServices = {
    getLogin,
    getSignup,
};

// interface IStackServices
interface IStackServices {
    getLogin: (payload: ILoginPayload) => Promise<ILoginResponse>;
    getSignup: (payload: ISignupPayload) => Promise<ISignupResponse>;
}
