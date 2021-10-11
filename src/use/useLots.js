import { ref } from "vue";
import {lotsService} from "../services";
import ViruelaBehavior from "./vaccines/ViruelaBehavior";
import MarekBehavior from "./vaccines/MarekBehavior";
import GumboroBehavior from "./vaccines/GumboroBehavior";
import NewCastleBehavior from "./vaccines/NewCastleBehavior";

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

const calculeDate = name => {
    let behavior = new vaccines[name];
    return {
        first: behavior.first(),
        last: behavior.last()
    }
}

const vaccines = {
    'viruela': ViruelaBehavior,
    'newCastle': NewCastleBehavior,
    'gumboro': GumboroBehavior,
    'marek': MarekBehavior,
}

export default function useLots() {
    return {
        lots,
        refreshLots,
        storeLots,
        calculeDate
    }
}