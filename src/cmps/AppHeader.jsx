import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"

import { UserMsg } from "./UserMsg.jsx"


export function AppHeader(){
    const navigate = useNavigate()

    return (
    <header>
    <UserMsg />
    <nav>
      <NavLink to="/">Home</NavLink> |<NavLink to="/toy">Toys</NavLink> |
      <NavLink to="/about">About</NavLink>
    </nav>
   
    {/* {user ? (
      <section>
        <Link className="user-details" to={`/user/${user._id}`}>
          Hello {user.fullname} 🍌
        </Link>
        <Link to={`/`} onClick={onLogout}>Logout</Link>
      </section>
    ) : (
      <section>
        <LoginSignup onSetUser={onSetUser} />
      </section>
    )}
    <UserMsg /> */}
  </header>
)
}