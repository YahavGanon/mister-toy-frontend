import { Link } from "react-router-dom";
import { ToyPreview } from "./ToyPreview.jsx";



export function ToyList({ toys, onRemoveToy }) {

    if (!toys) return <div>Loading...</div>
    return (
        <ul className="bug-list">
            {toys.map((toy) => (
                <li className="bug-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div>
                        <button onClick={() => onRemoveToy(toy._id)}>x</button>
                        <Link to={`/edit/${toy._id}`}><button>Edit Toy</button></Link>
                    </div>
                    <Link to={`/toy/${toy._id}`}>Details</Link>
                </li>
            ))
            }
        </ul >
    )
}