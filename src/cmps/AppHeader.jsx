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
                <div className="logo">
                    {/* <img className="img-logo" src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-bear-teddy-toy-png-image_10149481.png" alt="" />
                    <h1 className="h1-logo">MisterToy</h1> */}
                  <NavLink to="/"> <img className="img-logo" src="img/MisterToy_transparent.png" alt="" /></NavLink>
                </div>
                <nav className="nav-bar">
                    <NavLink to="/"><img className="nav-img" src="https://iconbug.com/download/size/256/icon/2897/toy-house/" alt="" /></NavLink> |<NavLink to="/toy">Toys</NavLink> |
                    <NavLink to="/dashboard"><img className="nav-img" src="https://static-00.iconduck.com/assets.00/increase-stats-icon-2021x2048-87in2u2l.png" alt="" /></NavLink>
                </nav>
            </div>
            {user &&
                <section style={{textAlign: "center"}}>
                    <Link style={{textDecoration: "none", color:"#333"}} className="user-details" to={`/user/${user._id}`}>
                        Hello {user.fullname} 🪀
                    </Link>
                    <Link style={{color: 'black'}} to={`/`} onClick={onLogout}>Logout</Link>
                </section>}

        </header>
    )
}