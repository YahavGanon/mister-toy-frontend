import { useState } from "react"
import { useSelector } from "react-redux"
import { utilService } from "../services/util.service"
import { saveToy } from "../store/actions/toy.actions"
import { toyService } from "../services/toy.service"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"



export function ToyMsg({ toy }) {
    console.log('toyThefirst', toy)
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const [currToy, setCurrToy] = useState({ toy })
    const [toyMsg, setToyMsg] = useState({ id: '', txt: '', by: { _id: '', fullname: ''} })
    // console.log(toyMsg)
    // console.log(currToy)
    // console.log(user)

    function handleChange({ target }) {
        const { name: field, value } = target
        setToyMsg(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        const newToyMsg = {
            ...toyMsg,
            id: user._id,
            by: {
                _id: user._id,
                fullname: user.fullname
            }
        }
        toy.msgs.push(newToyMsg)
        saveToy(toy).then(() => {
            showSuccessMsg('Your msg added')
        })
        .catch((err) => {
            showErrorMsg('Cannot added your msg')
        })

        setToyMsg({ id: '', txt: '', by: { _id: '', fullname: '' } })
    }


    return (
        <div className="reviews">
            <h1>Reviews: </h1>
            <form onSubmit={handleSubmit} action="">
                {user ? <input type="text" name="txt"
                    placeholder="Comment..."

                    value={toyMsg.txt}
                    onChange={handleChange} /> : <h3>Only logged in users can replay...</h3>}
                {user && <button>Share</button>}
            </form>


            <ul className="bug-list wrap">
                {toy.msgs.length > 0 ? toy.msgs.map((msg) => (
                    <li className="bug-preview" key={msg.id}>
                        {msg.txt}

                        {msg.by && (
                            <div>By: {msg.by.fullname}</div>
                        )}

                    </li>
                )) : <h2>No reviews yet...</h2>}
            </ul>




        </div>
    )


}