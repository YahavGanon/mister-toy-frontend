import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"

import { LoginSignup } from "./LoginSignup.jsx"
import { logout } from "../store/actions/user.actions.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function AppHeader() {
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.loggedInUser)

    function onSetUser(user) {
        setUser(user)
        navigate('/')
    }

    function onLogout() {
        logout()
            .then(() => {
                showSuccessMsg('Logout successfully')
            })
            .catch((err) => {
                showErrorMsg('OOPs try again')
            })
    }

    return (
        <header className="header">
            <h1>MisterToy</h1>
            <nav className="nav-bar">
                <NavLink to="/">Home</NavLink> |<NavLink to="/toy">Toys</NavLink> |
                <NavLink to="/dashboard">Dashboard</NavLink> |<NavLink to="/about">About</NavLink>
            </nav>

            {user &&
                <section>
                    <Link className="user-details" to={`/user/${user._id}`}>
                        Hello {user.fullname} 🪀
                    </Link>
                    <Link to={`/`} onClick={onLogout}>Logout</Link>
                </section>}

        </header>
    )
}