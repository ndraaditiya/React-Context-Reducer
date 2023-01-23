import axios from "axios";

const urlApi = 'https://calm-plum-jaguar-tutu.cyclic.app/'

const API = axios.create({
  baseURL: urlApi
})

export default API