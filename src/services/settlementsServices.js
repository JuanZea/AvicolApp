import axios from "axios";

const url = "http://localhost:3000/api/settlements";

const settlementsServices = {
    all: () => {
        try{
            return axios.get(`${url}`)
        }catch (err){
            console.log(err.message)
        }
    },
    create: (settlement) => {
        try{
           return axios.post(`${url}`, settlement)
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

export { settlementsServices }