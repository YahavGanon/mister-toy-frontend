
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"


export function Home() {
  const user = useSelector(storeState => storeState.userModule.loggedInUser)
  const [t, i18n] = useTranslation("global")
  return (
    <section className="home">
      <h1 className="center">{t("home.body")}</h1>
      {!user && <Link to="/started" ><button className="start-btn">Get stated</button></Link> }
        <Link to="/about" ><button className="start-btn">About</button></Link>
        <Outlet/>
    </section>
  )
}
