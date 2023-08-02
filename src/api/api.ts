import axios from 'axios'


const BASE_URL= 'https://entertainment-web.onrender.com/api'

export const getAllData=()=>{
    return axios.get(`${BASE_URL}/film`)
}
/*export const signUpUser=(data:userData)=>{
   return axios.post(`${BASE_URL}/user/signup`, data)
}
*/