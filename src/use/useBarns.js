import { ref } from "vue";
import { barnsService } from "../services";

const barns = ref();

const refreshBarns = () => {
    barnsService.all()
        .then(response => {
            barns.value = response;
        }).catch(console.log);
}

export default function useBarns() {
    return {
        barns,
        refreshBarns
    }
}