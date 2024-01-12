import axios from "axios";

var url = `http://localhost:8081/books`

export const registrarBookFachada = async (body) => {
    return await registrarBook(body);
}

const registrarBook = async (body) => {
    return axios.post(url, body).then(r => r.data)
}

export const listarBookFachada = async () => {
    return await listarBook();
}

const listarBook = async () => {
    return axios.get(url).then(r => r.data)
}

export const buscarBookFachada = async (id) => {
    return await buscarBook(id);
}

const buscarBook = async (id) => {
    return axios.get(url + `/`, id).then(r => r.data)
}

export const actualizarBookFachada = async (body) => {
    return await actualizarBook(body);
}

const actualizarBook = async (id, body) => {
    return axios.get(url + `/`, id, body).then(r => r.data)
}

export const eliminarBookFachada = async (id) => {
    return await eliminarBook(id);
}

const eliminarBook = async (id) => {
    return axios.post(url + `/`, id).then(r => r.data)
}


