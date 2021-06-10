import { heroes } from "../data/heroes";

export const getHeroByName = () => {
    const heroecito = heroes.filter((hero) => {
        return hero.superhero.length < 7;
    });
    return heroecito;
};
