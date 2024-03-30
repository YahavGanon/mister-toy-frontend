import { Link } from "react-router-dom";
import { ToyPreview } from "./ToyPreview.jsx";
import { useSelector } from "react-redux";
import 'animate.css';


export function ToyList({ toys, onRemoveToy }) {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)

    if (!toys) return <div><img className="loading-img" src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" /></div>
    return (
        <ul className="bug-list animate__animated animate__backInRight">
            {toys.map((toy) => (
                <li className="bug-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    {user.isAdmin === 'true' && <div>
                        <button style={{background:"none", border:"none", color: "rgb(234, 67, 53)", fontSize: "1.7em", margin: "0.15em"}} className="trash fa-solid fa-trash" onClick={() => onRemoveToy(toy._id)}></button>
                        <Link style={{fontSize: "1.7em", color:'rgb(234, 67, 53)', margin: "0.15em"}} className="edit fa-solid fa-pen-to-square" to={`/edit/${toy._id}`}></Link>
                    <Link style={{color: "rgb(234, 67, 53)", fontSize: "2em",marginBottom: "0.5em", margin: "0.15em"}} className="info fa-solid fa-circle-info" to={`/toy/${toy._id}`}></Link>
                    </div>}
                    {!user.isAdmin && <Link style={{color: "rgb(234, 67, 53)", fontSize: "2em",marginBottom: "0.5em"}} className="info fa-solid fa-circle-info" to={`/toy/${toy._id}`}></Link>}
                </li>
            ))
            }
        </ul >
    )
}