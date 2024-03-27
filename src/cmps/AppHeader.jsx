import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"

import { LoginSignup } from "./LoginSignup.jsx"
import { logout } from "../store/actions/user.actions.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { useTranslation } from "react-i18next"

export function AppHeader() {
    const [t, i18n] = useTranslation("global")
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.loggedInUser)

    function handleChangeLanguage(lang) {
        console.log(lang)
        i18n.changeLanguage(lang)
    }

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
            <div className="first-line">
                <h1>MisterToy</h1>
                <nav className="nav-bar">
                    <NavLink to="/">Home</NavLink> |<NavLink to="/toy">Toys</NavLink> |
                    <NavLink to="/dashboard">Dashboard</NavLink> 
                </nav>
            </div>
            {/* <NavLink to="/about">About</NavLink> */}
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