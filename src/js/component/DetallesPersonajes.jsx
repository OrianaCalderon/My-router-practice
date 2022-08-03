import React, { useEffect, useState } from "react";

const DetallesPersonajes = () => {
    const [person, setPerson] = useState({});

    const traerDetalles = async () => {
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            let data = await response.json();
            if (response.ok) {
                setPerson(data);
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        traerDetalles()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <div className="card my-3">
                            <img
                                src={person.image}
                                className="card-img-top"
                                alt={person.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.species}</p>
                                <p className="card-text">{person.status}</p>
                            </div>
                            <button type="button" onClick={() => navigate(-1)}>
                                Go back
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default DetallesPersonajes;