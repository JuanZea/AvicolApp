import router from "../router";
import {settlementsService} from "../services";

const store = (attributes) => {
    settlementsService.create(
        attributes
    ).then((response) => {
        console.log(response)
    }).catch(error => {
        console.log(error.response.data.errors)
    })
}

export default function useSettlements() {
    return {
        store,
    }
}