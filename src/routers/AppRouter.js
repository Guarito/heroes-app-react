import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path="/login" component={LoginScreen} /> */}
                    {/* Sustituimos la linea anterior por el componente de PublicRoute creado. Es util definir las rutas publicas igualmente de esa manera ya que en caso de que el usuario se encuentra autenticado e intenta ingresar directamente por ejemplo a la ruta de .../login, lo redireccionara a la ruta definida dentro de PublicRoute.js */}

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isLogged={user.logged}
                    />

                    {/* <Route path="/" component={DashboardRoutes} /> */}
                    {/* Para renderizar de manera condicional (En este caso, rutas privadas) creamos un componente donde 
                    de manera condicional renderizamos o redireccionamos segun sea el caso */}
                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isLogged={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    );
};
