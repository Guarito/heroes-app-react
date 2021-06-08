import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    //Defininimos los Publishers que estan definidos en nuestro archivo de data/heroes para utilizarlos como referencia al filtrar y evaluar si coincide el valor introducido por el usuario con alguno de ellos.
    const validPublishers = ["DC Comics", "Marvel Comics"];
    if (!validPublishers.includes(publisher)) {
        throw new Error(
            `Publisher: "${publisher}" inválido. Debe introducir DC Comics o Marvel Comics`
        );
    }

    return heroes.filter((hero) => {
        return hero.publisher === publisher;
    });
};
