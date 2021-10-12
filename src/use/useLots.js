import {ref} from "vue";
import {lotsService} from "../services";
import ViruelaBehavior from "./vaccines/ViruelaBehavior";
import MarekBehavior from "./vaccines/MarekBehavior";
import GumboroBehavior from "./vaccines/GumboroBehavior";
import NewCastleBehavior from "./vaccines/NewCastleBehavior";
import useMetrics from "./useMetrics";

const lots = ref();
const {refreshMetrics} = useMetrics();

const refreshLots = async (force) => {
    if (!lots.value || force) {
        lots.value = await lotsService.all();
        await refreshMetrics(true);
    }
}

const storeLots = async (attributes) => {
    await lotsService.create(attributes);
    await refreshLots(true);
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