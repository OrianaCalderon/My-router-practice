import React from "react";
import PropTypes from "prop-types";

//react router-dom
import { Link } from "react-router-dom";

const Personajes = ({ character }) => {

    const { id, name, species, image } = character;
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="card my-3">
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{species}</p>
                        <Link to={`/character/${id}`} className="btn btn-primary">
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

Personajes.propTypes ={
    character: PropTypes.object
};

export default Personajes;