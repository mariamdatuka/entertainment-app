import axios from 'axios'

const BASE_URL= 'https://entertainment-web.onrender.com/api'

export const getAllData=()=>{
    return axios.get(`${BASE_URL}/film`)
}