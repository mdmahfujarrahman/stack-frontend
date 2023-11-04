import logo from "./logo.png";
import google from "./google.svg";
import apple from "./apple.png";
import email from "./email.svg";
import nameIcon from "./nameIcon.svg";
import lock from "./lock.svg";

export const StackImages: IStackImages = {
    logo,
    google,
    apple,
    email,
    nameIcon,
    lock,
};

export type IStackImages = {
    [key: string]: string;
};
