import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { toyService } from "../services/toy.service.js";
import { showErrorMsg } from "../services/event-bus.service.js";

export function ToyDetails() {
    const [toy, setToy] = useState(null)
    const { toyId } = useParams()

    console.log(useParams());

    useEffect(() => {
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
            .catch(err => {
                showErrorMsg('Cannot load Toy')
            })
    }, [])

    if (!toy) return <h1>loadings....</h1>
    return toy && <div>
        <h3>Toy details</h3>
        <h4>{toy.title}</h4>
        <p>Price: <span>{toy.price}</span></p>
        <Link to="/toy">Back to List</Link>
    </div>
}