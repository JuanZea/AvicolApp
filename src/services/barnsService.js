import axios from "axios";

const url = "http://localhost:3000/api/barns";

const barnsServices = {
    all: () => {
        try{
            return axios.get(`${url}`)
        }catch (err){
            console.log(err.message)
        }
    },
    create: (barn) => {
        try{
            return axios.post(`${url}`, barn)
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

export { barnsServices }