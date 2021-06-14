import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />

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
