import React from "react";
import { Redirect, Route } from "react-router-dom";

//Recibimos como argumentos o props,
export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(routeProps) =>
                isLogged ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};
