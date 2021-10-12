import { ref } from "vue";
import { barnsService } from "../services";
import useMetrics from "./useMetrics";

const barns = ref();
const { refreshMetrics } = useMetrics();

const refreshBarns = () => {
    barnsService.all()
        .then(async response => {
            barns.value = response;
            await refreshMetrics(true);
        }).catch(console.log);
}

const storeErrors = ref([]);

const storeBarns = async (attributes) => {
    try {
        await barnsService.create(attributes);
        storeErrors.value = [];
        await refreshBarns(true);
    } catch (error) {
        error.response.data.errors.errors.forEach(data => {
            storeErrors.value[data.param] = 'El valor ingresado es invalido';
        });
    }
}


export default function useBarns() {
    return {
        barns,
        refreshBarns,
        storeBarns
    }
}