import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'


export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter,
    countLabels
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}


function getEmptyToy() {
    return {
        title: "",
        price: "",
        inStock: true,
        msgs: []
    }
}

function getDefaultFilter() {
    return { txt: '', inStock: null, pageIdx: 0, maxPrice: '' }
}

function countLabels(dollsArray) {
    let labelCounts = {}
//{ label: 'adventure', count: 10 }

    dollsArray.forEach(doll => {
        if (doll.labels && Array.isArray(doll.labels)) {
            doll.labels.forEach(label => {
                if (labelCounts[label]) {
                    labelCounts[label]++
                } else {
                    labelCounts[label] = 1
                }
            })
        }
    })

    return labelCounts
}

