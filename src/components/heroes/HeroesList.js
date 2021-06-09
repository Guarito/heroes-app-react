import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
    // const heroes = getHeroesByPublisher(publisher);
    // console.log(heroes);

    //Hacemos uso del useMemo para optimizar rendimiento, ya que asi evitamos que el componente se renderice a menos de que cambie el valor de publisher.
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="card-columns">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
            ))}
        </div>
    );
};
