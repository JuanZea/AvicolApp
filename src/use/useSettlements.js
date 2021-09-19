import { ref } from "vue";
import { settlementsService } from "../services";
import { _updateSettlement } from "../services/avicolappAssembler";
import router from "../router";
import useStore from "./store/useStore";

const { state } = useStore();
const activeSettlement = ref();
const settlements = ref();

const refreshActiveSettlement = async () => {
    const ACTIVE_SETTLEMENT_ID = localStorage.getItem(`activeSettlement-${state.user.uid}`);
    if (ACTIVE_SETTLEMENT_ID) {
        try {
            activeSettlement.value = await settlementsService.one(ACTIVE_SETTLEMENT_ID);
            _updateSettlement(activeSettlement.value.id);
        } catch (error) {
            localStorage.removeItem(`activeSettlement-${state.user.uid}`);
            await refreshActiveSettlement();
        }
    } else {
        try {
            activeSettlement.value = await settlementsService.first();
            _updateSettlement(activeSettlement.value.id);
            saveActiveSettlement(activeSettlement.value.id);
        } catch (error) {
            activeSettlement.value = null;
            router.push({name: 'createSettlements'});
        }
    }
}

const saveActiveSettlement = (id) => localStorage.setItem(`activeSettlement-${state.user.uid}`, id);

const refreshSettlements = (force) => {
    if (!settlements.value || force) {
        settlementsService.all()
            .then(response => {
                settlements.value = response;
            });
    }
}

const storeErrors = ref([]);

const storeSettlements = async (attributes) => {
    attributes.user_id = state.user.uid;
    try {
        await settlementsService.create(attributes);
        storeErrors.value = [];
        await refreshActiveSettlement();
    } catch (error) {
        error.response.data.errors.errors.forEach(data => {
            storeErrors.value[data.param] = 'El valor ingresado es invalido';
        });
    }
}


export default function useSettlements() {
    return {
        settlements,
        storeErrors,
        storeSettlements,
        activeSettlement,
        refreshSettlements,
        saveActiveSettlement,
        refreshActiveSettlement
    }
}