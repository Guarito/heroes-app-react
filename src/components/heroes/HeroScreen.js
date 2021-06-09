import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
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

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero;

    return (
        <div>
            <h1>{superhero}</h1>
        </div>
    );
};
