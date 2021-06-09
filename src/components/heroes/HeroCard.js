import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
    const { id, superhero, alter_ego, first_appearance, characters } = hero;
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutter">
                <div className="col-md-5  d-flex align-items-center">
                    <img
                        src={`./assets/heroes/${id}.jpg`}
                        alt={superhero}
                        className="card-img"
                    />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {/* Para no mostrar aquellos heroes que su alter_ego sea el mismo que el character, filtramos */}
                        {alter_ego !== characters && (
                            <p className="card-text">{characters}</p>
                        )}
                        <p className="card-text">
                            <small className="text-muted">
                                {first_appearance}
                            </small>
                        </p>
                        <Link to={`/hero/${id}`}> Más... </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
