import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
    //Hacemos uso del hook useParams para extraer el parametro heroeId de la ruta en este caso
    const params = useParams();
    // console.log(params);
    const { heroId } = params;

    //Posterior a ello, al tener disponibilidad de ese id, procedemos a hacer uso del selector creado getHeroesById
    const hero = getHeroesById(heroId);

    //El selector retorna undefined en el caso que se le envie un heroId invalido, por ejemplo, si se edita manualmente la ruta con caracteres aleatorios. Por ende, toca validar de que el retorno exista para poder pintar nuestro componente
    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        //Utilizamos el metodo goBack ubicado dentro de las props que recibe el componente desde react router dom
        //Realizamos una pequeña validacion para el caso en que al abrir por primera vez el navegador en la ruta de un heroe en especifico, al darle al boton de Return, redirija a la pagina principal de la aplicacion y no a alguna otra externa
        if (history.length <= 2) {
            history.push("/");
        } else {
            history.goBack();
        }
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero;

    return (
        <div className="row">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                </ul>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                </ul>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>First appearance:</b> {first_appearance}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    );
};
