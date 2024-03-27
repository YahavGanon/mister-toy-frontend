import { Link } from "react-router-dom"

import { LoginSignup } from "../cmps/LoginSignup"

export function Started() {

    return <section className="started-container">
        <section>
            <LoginSignup />
        </section>
    </section>
}