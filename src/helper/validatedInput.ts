import { Ierror } from "../screens/Login/Login";
import { IValidateInput } from "./helper.type.";

export const validatedInput = (
    inputData: IValidateInput,
    isValided: Array<Ierror>,
    type: string
): boolean | Ierror[] => {
    const { name, email, password, terms, remember } = inputData;
    if (email.length === 0) {
        isValided.push({
            isError: true,
            name: "email",
        });
    } else if (type === "signup" && name?.length === 0) {
        isValided.push({
            isError: true,
            name: "name",
        });
    } else if (password.length === 0) {
        isValided.push({
            isError: true,
            name: "password",
        });
    } else if (type === "signup" && terms === false) {
        isValided.push({
            isError: true,
            name: "terms",
        });
    } else if (type === "login" && remember === false) {
        isValided.push({
            isError: true,
            name: "remember",
        });
    }

    if (isValided.length > 0) {
        return isValided;
    } else {
        return true;
    }
};
