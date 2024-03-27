
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'
import { utilService } from './util.service.js'

const PAGE_SIZE = 5
const STORAGE_KEY = 'toyDB'
_createToys()


export const toyService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter,
    getEmptyToy
}

function getEmptyToy() {
    return {
        title: "",
        price: "",
        inStock: true,
    }
}

function query(filterBy = { txt: '', inStock: 'all', pageIdx: 0}) {
    return storageService.query(STORAGE_KEY)
    .then(toys => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            toys = toys.filter(toy => regex.test(toy.title))
        }

        if (filterBy.inStock !== 'all') {
            toys = toys.filter((toy) => (filterBy.inStock === 'stock' ? toy.inStock : !toy.inStock))
        }
      
        if (filterBy.pageIdx !== undefined) {
            const startIdx = filterBy.pageIdx * PAGE_SIZE
            toys = toys.slice(startIdx, PAGE_SIZE + startIdx)
        }
        return toys
    })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toy)
    }
}

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = [
            {
                title: "Explorer Doll",
                price: 130,
                _id: "2XPL0R3",
                labels: [
                    "Doll",
                    "Adventure",
                    "Kids"
                ],
                createdAt: 1632031801022,
                inStock: true,
                img: "https://cdn.dribbble.com/userupload/4008401/file/original-ee003fb1c74ecd86bbd89e95c5bd4e52.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Dreamer Doll",
                price: 128,
                _id: "DR34M",
                labels: [
                    "Doll",
                    "Soft",
                    "Sleep"
                ],
                createdAt: 1631032801011,
                inStock: false,
                img: "https://cdn.dribbble.com/userupload/4008422/file/original-10ee449b9737f5d00903c92fb625e242.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Singer Doll",
                price: 132,
                _id: "S1NG",
                labels: [
                    "Doll",
                    "Music",
                    "Battery Powered"
                ],
                createdAt: 1631033501011,
                inStock: true,
                img: "https://cdn.dribbble.com/userupload/4008423/file/original-4c4dbd2d8894498f8dd05fc3dbd76144.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Builder Doll",
                price: 127,
                _id: "BU1LD",
                labels: [
                    "Doll",
                    "Construction",
                    "Educational"
                ],
                createdAt: 1631037701011,
                inStock: "false",
                img: "https://cdn.dribbble.com/userupload/4008417/file/original-331c6a297f0ed80f145921cabeabfd99.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Talking Doll",
                price: 123,
                _id: "1NF1N1T3",
                labels: [
                    "Doll",
                    "Battery Powered",
                    "Baby"
                ],
                createdAt: 1631031801022,
                inStock: true,
                img: "https://cdn.dribbble.com/userupload/4008401/file/original-ee003fb1c74ecd86bbd89e95c5bd4e52.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Happy Doll",
                price: 123,
                _id: "K3YB0RD",
                labels: [
                    "Doll",
                    "Battery Powered",
                    "Baby"
                ],
                createdAt: 1631031801011,
                inStock: false,
                img: "https://cdn.dribbble.com/userupload/4008422/file/original-10ee449b9737f5d00903c92fb625e242.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Funny Doll",
                price: 125,
                _id: "C0FF33",
                labels: [
                    "Doll",
                    "Battery Powered",
                    "Baby"
                ],
                createdAt: 1631032501011,
                inStock: true,
                img: "https://cdn.dribbble.com/userupload/4008423/file/original-4c4dbd2d8894498f8dd05fc3dbd76144.png?resize=1200x1200&vertical=center"
            },
            {
                title: "Sexy Doll",
                price: 126,
                _id: "G0053",
                labels: [
                    "Doll",
                    "Battery Powered",
                    "Baby"
                ],
                createdAt: 1631036701011,
                inStock: true,
                img: "https://cdn.dribbble.com/userupload/4008417/file/original-331c6a297f0ed80f145921cabeabfd99.png?resize=1200x1200&vertical=center"
            }
        ]
        
        utilService.saveToStorage(STORAGE_KEY, toys)
    }
}

function getDefaultFilter() {
    return { txt: '',inStock: 'all',  pageIdx: 0}
}