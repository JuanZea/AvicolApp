import {ref} from "vue";
import {barnsService} from "../services";

const barns = ref();

const indexBarns = () => {
    barnsService.all()
        .then(response => {
            barns.value = response;
        }).catch(console.log);
}

export default function useBarns() {
    return {
        indexBarns,
        barns
    }
}