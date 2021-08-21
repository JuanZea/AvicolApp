import axios from "axios";

const all = (URL) => () => axios.get(URL)
    .then(response => response)
    .catch(console.log);

const one = (URL) => (id) => axios.get(`${URL}/${id}`)
    .then(response => response)
    .catch(console.log);

const create = (URL) => (body) => axios.post(URL, body)
    .then(response => response)
    .catch(console.log);

const destroy = (URL) => (id) => axios.delete(`${URL}/${id}`)

export {all, one, create, destroy}