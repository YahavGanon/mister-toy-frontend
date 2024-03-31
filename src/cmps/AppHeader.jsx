import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"

import { LoginSignup } from "./LoginSignup.jsx"
import { logout } from "../store/actions/user.actions.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export function AppHeader() {
    const [t, i18n] = useTranslation("global")
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const [isOpen, setIsOpen] = useState(false)
    const dynClass = isOpen ? 'menu-open' : ''
    const dynBtn = isOpen ? '1' : '0'

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

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <header className="header">
            <div className="first-line">
                <div className="logo">
                    <NavLink to="/"> <img className="img-logo" src="img/MisterToy_transparent.png" alt="" /></NavLink>
                </div>

            {user &&
                <section style={{ textAlign: "center" }}>
                    <Link style={{ textDecoration: "none", color: "#333" }} className="user-details" to={`/user/${user._id}`}>
                        Hello {user.fullname} 🪀
                    </Link>
                    <Link style={{ color: 'black', lineHeight: '10' }} to={`/`} onClick={onLogout}>Logout</Link>
                </section>}

                <nav className={`nav-bar ${dynClass}`}>
                    <NavLink onClick={toggleMenu} className="nav-link" to="/"><img className="nav-img" src="https://iconbug.com/download/size/256/icon/2897/toy-house/" alt="" /></NavLink> <NavLink onClick={toggleMenu} className="nav-link" to="/toy">Toys</NavLink>
                    <NavLink onClick={toggleMenu} className="nav-link" to="/dashboard"><img className="nav-img" src="https://static-00.iconduck.com/assets.00/increase-stats-icon-2021x2048-87in2u2l.png" alt="" /></NavLink>
                    <button onClick={toggleMenu} style={{ position: "absolute", left: "0", top: "0", opacity: `${dynBtn}` }}>X</button>
                </nav>
                <button class="toggle-menu-btn" onClick={toggleMenu} type="button">☰</button>
            </div>

        </header>
    )
}