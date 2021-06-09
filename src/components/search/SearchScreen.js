import React from "react";

export const SearchScreen = () => {
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <form>
                        <input
                            name="search"
                            type="text"
                            className="form-control mt-2"
                            autoComplete="off"
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
                </div>
            </div>
        </div>
    );
};
