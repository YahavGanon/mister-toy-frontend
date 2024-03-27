import { useSelector } from "react-redux"

export function AppFooter() {
    const count = useSelector(storeState => storeState.toyModule.toys.length)
    return <footer className="footer">
        <h4>Created by Yahav Ganon ®️</h4>
        <h3>Toys: {count}</h3>
    </footer>
}