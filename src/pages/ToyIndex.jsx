import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// import { toyService } from '../services/toy.service.js'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ToyList } from '../cmps/ToyList.jsx'
import { loadToys, removeToy, saveToy, setFilterBy } from '../store/actions/toy.actions.js'
import { useNavigate } from 'react-router-dom'
import { Pagination } from '../cmps/Pagination.jsx'





export function ToyIndex() {
    const navigate = useNavigate()
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const user = useSelector(storeState => storeState.userModule.loggedInUser)


    useEffect(() => {
        loadToys()
            .catch(err => {
                showErrorMsg('Cannot load Toys!')
            })
    }, [filterBy])

    function onAddToy() {
        navigate('/edit')
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveToy(toyId) {
        removeToy(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch((err) => {
                showErrorMsg('Cannot remove toy')
            })
    }

    return (
        <main>

            {user ? (
                <section>
                    <h3>Our Toys</h3>
                    <main>
                        <div className='toys-actions'>
                            <button onClick={onAddToy}>Add Toy 🧸</button>
                            <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                            <Pagination filterBy={filterBy} onSetFilter={onSetFilter} />
                        </div>
                        {!isLoading
                            ? <ToyList toys={toys} onRemoveToy={onRemoveToy} />
                            : <img className="loading-img" src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" />
                        }
                    </main>
                </section>
            ) : (
                <div>
                    <h1>You must be a logged in user to purchase our toys...</h1>
                    <img src="https://st2.depositphotos.com/1252248/9434/v/450/depositphotos_94342060-stock-illustration-pop-art-comics-style.jpg" alt="" />
                </div>
            )}

        </main>
    )
}
