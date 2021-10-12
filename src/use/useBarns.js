import {ref} from "vue";
import {barnsService} from "../services";
import useMetrics from "./useMetrics";

const barns = ref();
const {refreshMetrics} = useMetrics();

const refreshBarns = () => {
    barnsService.all()
        .then(async response => {
            barns.value = response;
            await refreshMetrics(true);
        }).catch(console.log);
}

const storeBarns = async (attributes) => {
    await barnsService.create(attributes);
    await refreshBarns(true);
}


export default function useBarns() {
    return {
        barns,
        refreshBarns,
        storeBarns
    }
}