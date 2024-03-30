import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { toyService } from "../services/toy.service.js";
import { showErrorMsg } from "../services/event-bus.service.js";
import { ToyMsg } from "../cmps/ToyMsg.jsx";

export function ToyDetails() {
    const [toy, setToy] = useState(null)
    const { toyId } = useParams()

    // console.log(useParams())

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
    return toy && <div className="toy-data">
        <Link className="back-list" to="/toy">Back to List</Link>
            <h3>Toy details</h3>
        <div style={{gap: "2em"}} className="details-split">
            <article className="toy-card">
                <img className="img-details" src={toy.img} href="" />
                <h4>{toy.title}</h4>
                <div>
                    <p>Price: <span>{toy.price}</span></p>
                    {toy.inStock && <h5>In stock: ✅</h5>}
                    {!toy.inStock && <h5>In stock: ❌</h5>}
                </div>
            </article>
            <ToyMsg toy={toy} />
        </div>
    </div>
}