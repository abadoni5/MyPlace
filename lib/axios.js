import Axios from 'axios'

const headers = {
    'X-RapidAPI-Key': 'c83dc464d2msh093d297a8a4affep156665jsn87c6aab5d87e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export const axios = Axios.create({
    baseURL: 'https://bayut.p.rapidapi.com',
    headers,

})
  