import axios from "axios";

const key = '2c772de3'

const api = axios.create({
    baseURL: "https://www.omdbapi.com/"
})

export const  getDataByTitle = (query) => {
    return api.get(`?apikey=${key}&t=${query}`)
}

export const getDataByID = (idAayi) => {
    return api.get(`?i=${idAayi}&apiKey=${key}`)
}