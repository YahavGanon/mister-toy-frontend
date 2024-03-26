import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"


export function Pagination({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    onSetFilter = useRef(utilService.debounce(onSetFilter, 500))

    useEffect(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target

        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return <form action="">
        <label htmlFor="pageIdx">Page:</label>
        <input type="number"
            id="pageIdx"
            name="pageIdx"
            placeholder="0"
            value={filterBy.pageIdx}
            onChange={handleChange}
            className="page-input"
        />
    </form>
}