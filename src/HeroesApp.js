import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem("user")) || {
        logged: false,
    };
    console.log(userLocalStorage);
    return userLocalStorage;
};

const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    // console.log(user);
    //Implementamos el efecto para guardar en el localStorage la informacion del user cuando se le clickea a Login
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

export default HeroesApp;
