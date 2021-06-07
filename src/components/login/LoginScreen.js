import React from "react";
//Observamos en nuestro arbol de componentes (ReactDevTools) que al utilizar el react router dom, se pasan props por defecto a nuestros componentes. De alli, se trabajara en torno a la prop history y sus distintas funciones
export const LoginScreen = ({ history }) => {
    const handleLogin = () => {
        // console.log(history);
        //history.push('/');
        history.replace("/");
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
