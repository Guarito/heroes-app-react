import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
//Recibimos como argumentos o props,
export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
    // console.log(isLogged, rest);

    //Hacemos uso del localStorage para almacenar la ultima ruta al momento de hacer logout.
    // console.log(rest.location.pathname);
    //Observamos que al cambiar de ruta se renderiza el componente PrivateRoute y obtenemos la impresion anterior. Por ende, podemos guardar directamente esos cambios
    localStorage.setItem("lastPath", rest.location.pathname);
    //Ahora en el componente de Login procedemos a leer ese lastPath
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
