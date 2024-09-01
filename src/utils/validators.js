import { isValidUsername } from "6pp";

export const  usernamevalidator = (usernamevalidator) => {

    if (!isValidUsername(username))
    return { isValid:false, errorMessage: "Username is Invalid" };
}

