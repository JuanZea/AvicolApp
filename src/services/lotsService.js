import axios from "axios";

const url = "http://localhost:3000/api/lots";

const lotsServices = {
    all: () => {
        try{
            return axios.get(`${url}`)
        }catch (err){
            console.log(err.message)
        }
    },
    create: (lot) => {
        try{
            return axios.post(`${url}`, lot)
        }catch (err){
            console.log(err.message)
        }
    },
    delete: (id) => {
        try{
            return axios.delete(`${url}/${id}`)
        }catch (err){
            console.log(err.message)
        }
    }

};

export { lotsServices }