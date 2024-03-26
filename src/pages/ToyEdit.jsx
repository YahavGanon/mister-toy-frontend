import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { toyService } from "../services/toy.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { saveToy } from "../store/actions/toy.actions.js"

export function ToyEdit() {
    const { toyId } = useParams()
    const navigate = useNavigate()
    
    const [editToy, setEditToy] = useState(toyService.getEmptyToy())

    useEffect(() => {
        toyService.getById(toyId)
            .then(toy => {
                setEditToy(toy)
            })
            .catch(err => {
                // showErrorMsg('Cannot load toy')
            })
    }, [])


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setEditToy(prevEditToy=>({ ...prevEditToy, [field]: value }))
    }

    function submit(ev) {
        ev.preventDefault()
        console.log('hi');
        saveToy(editToy)
        navigate('/toy')
        showSuccessMsg('We did it!')
    }

    return <form onSubmit={submit}>
        <input
            type="text"
            name="title"
            value={editToy.title}

            onChange={handleChange}
            placeholder="Toy name"
        />
        <input
            type="text"
            name="price"

            value={editToy.price}
            onChange={handleChange}
            placeholder="Toy price"
        />
        <button>submit</button>
    </form>

}