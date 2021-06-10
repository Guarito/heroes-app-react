import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";

import { HeroCard } from "../heroes/HeroCard";
import { Message } from "../ui/Message";
import { useForm } from "../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
    //////////////////////////Bloque para trabajar con el useLocation///////////////////////////////////////////////
    //Mediante el hook useLocation extraemos el objeto
    const location = useLocation();
    // console.log(location.search);

    //Luego, con el paquete queryString utilizamos su metodo para parsear el resultado extraido del location
    const parsed = queryString.parse(location.search);
    // console.log(parsed);

    //El paquete nos arrojara un objeto de salida en donde se tendran todos los parametros, en este caso, desestructuramos el unico existente que es q (de querie). Inicializamos el valor con un string vacio ya que cuando no existe nada luego del search en la ruta(Ejemplo:.../search?q=TerminoDeBusqueda => .../search), nuestra q tendra valor de undefined | null.
    const { q } = parsed;
    // console.log(q);

    const [formValues, handleInputChange, reset] = useForm({
        // searchText: "",

        searchText: q || "",
    });

    const { searchText } = formValues;
    // console.log(searchText);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Mandamos como parametro el nombre/valor que introduzca el usuario
    // const heroesFiltered = getHeroByName(searchText);

    //Redefinimos el concepto para que el filtrado no se ejecute con cada cambio en el termino de busqueda sino cuando el query = q cambie, es decir, luego de realizar el submit;

    //Por lo tanto, redefinimos haciendo uso del useMemo:
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    // console.log(heroesFiltered);

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
                    {!q && (
                        <Message
                            clase="alert-info"
                            message="Search a hero..."
                        />
                    )}
                    {q && heroesFiltered.length === 0 && (
                        <Message
                            clase="alert-danger"
                            message={`Not found results with '${q}'`}
                        />
                    )}
                    {heroesFiltered.map((hero) => {
                        return <HeroCard key={hero.id} hero={hero} />;
                    })}
                </div>
            </div>
        </div>
    );
};
