import logo from "./logo.png";
import google from "./google.svg";
import apple from "./apple.png";
import email from "./email.svg";
import nameIcon from "./nameIcon.svg";
import lock from "./lock.svg";
import menu from "./menu.svg";
import user from "./user.svg";
import sales from "./sales.svg";
import search from "./search.svg";
import notification from "./notification.svg";
import profile from "./profile.png";
import first from "./first.svg";
import last from "./last.svg";
import eye from "./eye.svg";

export const StackImages: IStackImages = {
    logo,
    google,
    apple,
    email,
    nameIcon,
    lock,
    menu,
    user,
    sales,
    search,
    notification,
    profile,
    first,
    last,
    eye,
};

export type IStackImages = {
    [key: string]: string;
};
