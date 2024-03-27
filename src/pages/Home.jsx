
import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"


export function Home() {
  const user = useSelector(storeState => storeState.userModule.loggedInUser)
  return (
    <section className="home">
      <h1 className="center">Your toy platform</h1>
      {!user && <Link to="/started" ><button className="start-btn">Get stated</button></Link> }
        <Link to="/about" ><button className="start-btn">About</button></Link>
        <Outlet/>
    </section>
  )
}
