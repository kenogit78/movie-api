import axios from 'axios'

export const swapi = axios.create({
    baseURL: 'https://swapi.py4e.com/api/'
})

export const getResource = url => {
    return swapi.get(url).then(({data}) => data).catch(error => error.response)
}

