import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"


export function ToyFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    onSetFilter = useRef(utilService.debounce(onSetFilter, 500))

    useEffect(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        console.log('value',value)

        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (
        <form className="filter-cmp">
            <div className="radio-sort flex justify-center align-center">
                <label htmlFor="all">
                    <input defaultChecked type="radio" name="inStock" value={null} id="all" onChange={handleChange} />
                    All
                </label>
                <label htmlFor="stock">
                    <input type="radio" name="inStock" value={true} id="stock" onChange={handleChange} />
                    In stock
                </label>
                <label htmlFor="unStock">
                    <input type="radio" name="inStock" value={false} id="unStock" onChange={handleChange} />
                    Not in stock
                </label>
            </div>

            <label className="search-focus" htmlFor="title"><span className="fa-solid fa-magnifying-glass"></span></label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="Search by Toy name..."
                value={filterByToEdit.txt}
                onChange={handleChange}
                className="search-input"
            />
        </form>
    )
}