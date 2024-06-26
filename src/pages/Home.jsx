
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

export function Home() {
  const user = useSelector(storeState => storeState.userModule.loggedInUser)
  const [t, i18n] = useTranslation("global")
  return (
    <section className="home">
      <h1 className="center">{t("home.body")}</h1>
      <img style={{width: "10em"}} src="https://media.tenor.com/JOu11ZwS0uIAAAAi/gif-osito.gif" alt="" />
      <div>
      {!user && <Link to="/started" ><button className="start-btn">Get stated</button></Link> }
        <Link to="/about" ><button className="start-btn">About</button></Link>
      </div>
        <Outlet/>
    </section>
  )
}
