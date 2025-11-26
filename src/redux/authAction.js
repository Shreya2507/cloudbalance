export const login = (authData) => {
    return {type: "LOGIN", payload: authData};
}

export const logout = () => {
    return {type: "LOGOUT"};
}