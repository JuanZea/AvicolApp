import { ref } from "vue";
import {lotsService} from "../services";

const lots = ref();

const refreshLots = async (force) => {
    if (!lots.value || force) lots.value = await lotsService.all();
}

const storeErrors = ref([]);

const storeLots = async (attributes) => {
    try {
        await lotsService.create(attributes);
        storeErrors.value = [];
        await refreshLots(true);
    } catch (error) {
        error.response.data.errors.errors.forEach(data => {
            storeErrors.value[data.param] = 'El valor ingresado es invalido';
        });
    }
}


export default function useLots() {
    return {
        lots,
        refreshLots,
        storeLots
    }
}