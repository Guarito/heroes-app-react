import React from "react";
import { queryString } from "query-string";
import { useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";

import { useForm } from "../hooks/useForm";

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    console.log(location.search);
    const heroesFiltered = heroes;

    const [formValues, handleInputChange, reset] = useForm({
        searchText: "",
    });

    const { searchText } = formValues;

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
