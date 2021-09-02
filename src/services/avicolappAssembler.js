import axios from "axios";

const service = axios.create({baseURL: `${import.meta.env.VITE_APP_URL_AV_API}/api`});

const all = (url) => () => service.get(url)
    .then(response => response)
    .catch(console.log);

const one = (url) => (id) => service.get(`${url}/${id}`)
    .then(response => response)
    .catch(console.log);

const create = (url) => (body) => service.post(url, body)
    .then(response => response)
    .catch(console.log);

const destroy = (url) => (id) => service.delete(`${url}/${id}`)

const update = (url) => (id, body) => service.patch(`${url}/${id}`, body)
    .then(response => response)
    .catch(console.log);

export {all, one, create, destroy, update}