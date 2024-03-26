import { useSelector } from "react-redux"

export function AppFooter() {
    const count = useSelector(storeState => storeState.toyModule.toys.length)
    return <footer>
        <h3>Toys: {count}</h3>
        <h4>Created by Yahav Gonen ®️</h4>
    </footer>
}