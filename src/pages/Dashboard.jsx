import { Chart } from "../cmps/Chart"
import { GoogleMap } from "../cmps/GoogleMap"



export function Dashboard() {
    return <article>
        <div className="dashbord">
            <div className="google-map">
            <h1>Where do we sit?</h1>
            <GoogleMap />
            </div>

            <div className="chart-stats">
            <h1>Toys stats</h1>
            <Chart className="chart"/>
            </div>

        </div>
    </article>
}
// AIzaSyD3R7f493EHddS6kDnBuhqVtvDKRLsI328