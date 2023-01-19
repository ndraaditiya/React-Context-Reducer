import axios from "axios";

const urlApi = 'https://odd-blue-yak-slip.cyclic.app/'

const API = axios.create({
  baseURL: urlApi
})

export default API