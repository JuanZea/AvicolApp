import axios from "axios";

const service = axios.create({baseURL: `${import.meta.env.VITE_APP_URL_AV_API}/api`});

export const _updateAuth = (id) => service.defaults.headers.user_id = id;
export const _updateSettlement = (id) => service.defaults.headers.settlement_id = id;
export const _updateBarn = (id) => service.defaults.headers.barn_id = id;

const handleResponse = (response, scope) => {
    switch (scope) {
        case 'axios': {
            return response;
        }
        case 'api': {
            return response.data;
        }
        default: {
            return response.data.data;
        }
    }
}

export const all = (url) => (scope) => service.get(url)
    .then(response => handleResponse(response, scope));

export const one = (url) => (id, scope) => service.get(`${url}/${id}`)
    .then(response => handleResponse(response, scope));

export const first = (url) => (scope) => service.get(`${url}/first`)
    .then(response => handleResponse(response, scope));

export const create = (url) => (body, scope) => service.post(url, body).then(response => handleResponse(response, scope));

export const update = (url) => (id, body, scope) => service.patch(`${url}/${id}`, body)
    .then(response => handleResponse(response, scope));

export const destroy = (url) => (id) => service.delete(`${url}/${id}`)

