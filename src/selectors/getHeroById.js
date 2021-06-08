import { heroes } from "../data/heroes";

export const getHeroesById = (id) => {
    return heroes.find((hero) => {
        return hero.id === id;
    });
};
