import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

//Observamos en nuestro arbol de componentes (ReactDevTools) que al utilizar el react router dom, se pasan props por defecto a nuestros componentes. De alli, se trabajara en torno a la prop history y sus distintas funciones

export const LoginScreen = ({ history }) => {
    //Utilizamos el useContext para extraer nuestro AuthContext
    const context = useContext(AuthContext);
    const { dispatch } = context;

    // console.log(user);

    const handleLogin = () => {
        // console.log(history);
        //history.push('/');
        // history.replace("/");
        //Con la ayuda del useContext tenemos acceso al context que creamos, y podemos llamar al dispatch para mandar data.
        //En el payload solo mandamos un objeto con el name ya que por defecto en el authReducer, seteamos la propiedad logged a true con el uso del spread operator
        // const action = {
        //     type: types.login,
        //     payload: {
        //         name: "Miguel",
        //     },
        // };
        // dispatch(action);

        //Podemos mandar los datos directamente sin necesidad de crear el action que
        dispatch({
            type: types.login,
            payload: {
                name: "Miguel",
            },
        });

        //Hacemos lectura del localStorage para obtener la ultima ruta visitada antes de haber hecho logout.
        const lastPath = localStorage.getItem("lastPath") || "/";
        // console.log(lastPath);
        // history.replace("/");
        history.replace(lastPath);
    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
