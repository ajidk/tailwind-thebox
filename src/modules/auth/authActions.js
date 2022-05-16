import { AUTH_CONSTANT } from "./authConstants";

export const authAction = (payload) =>({
    type: AUTH_CONSTANT,
    payload,
})