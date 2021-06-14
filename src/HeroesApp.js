import React, { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
    return console.log("Init desde el reducer");
};

const HeroesApp = () => {
    const [state, dispatch] = useReducer(authReducer, {}, init);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

export default HeroesApp;
