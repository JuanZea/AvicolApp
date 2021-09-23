import { ref } from "vue";
import { barnsService } from "../services";

const barns = ref();

const refreshBarns = () => {
    barnsService.all()
        .then(response => {
            barns.value = response;
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