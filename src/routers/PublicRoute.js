import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ component: Component, isLogged, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(routerProps) =>
                isLogged ? <Redirect to="/" /> : <Component {...routerProps} />
            }
        />
    );
};

PublicRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
