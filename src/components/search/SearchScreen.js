import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";

import { useForm } from "../hooks/useForm";

export const SearchScreen = ({ history }) => {
    //Mediante el hook useLocation extraemos el objeto
    const location = useLocation();
    // console.log(location.search);

    //Luego, con el paquete queryString utilizamos su metodo para parsear el resultado extraido del location
    const parsed = queryString.parse(location.search);
    // console.log(parsed);

    //El paquete nos arrojara un objeto de salida en donde se tendran todos los parametros, en este caso, desestructuramos el unico existente que es q (de querie). Inicializamos el valor con un string vacio ya que cuando no existe nada luego del search en la ruta(Ejemplo:.../search?q=TerminoDeBusqueda => .../search), nuestra q tendra valor de undefined | null.
    const { q } = parsed;
    // console.log(q);

    const heroesFiltered = heroes;

    const [formValues, handleInputChange, reset] = useForm({
        // searchText: "",

        searchText: q || "",
    });

    const { searchText } = formValues;
    console.log(searchText);
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(searchText);
        history.push(`?q=${searchText}`);
        reset();
    };
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSubmit}>
                        <input
                            name="searchText"
                            type="text"
                            className="form-control mt-2"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                            placeholder="Find your hero..."
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-info form-control mt-2"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {heroesFiltered.map((hero) => {
                        return <HeroCard key={hero.id} hero={hero} />;
                    })}
                </div>
            </div>
        </div>
    );
};
