import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
//Recibimos como argumentos o props,
export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
    // console.log(isLogged, rest);
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

PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
