import axios from "axios";

const serv = 'http://localhost:5000/'

const $host = axios.create({
    baseURL: serv
})

export {
    $host
}