export type ILoginPayload = {
    email: string;
    password: string;
};

export type ILoginResponse = {
    token?: string;
    error?: string;
};

export type ISignupPayload = {
    email: string;
    password: string;
    name: string;
};
export type ISignupResponse = {
    id?: number;
    token?: string;
    error?: string;
};
