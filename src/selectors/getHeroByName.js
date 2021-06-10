import { heroes } from "../data/heroes";

export const getHeroByName = (name = "") => {
    //Aplicamos el lowerCase al parametro entrante para asegurar que el match cumpla
    name = name.toLowerCase();

    const heroecito = heroes.filter((hero) => {
        //Probando que el metodo filter me retorne un arreglo de elementos que cumplan la condicion
        // return hero.superhero.length < 5;

        return hero.superhero.toLowerCase().includes(name);
    });
    return heroecito;
};
