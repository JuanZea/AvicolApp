import { ref } from "vue";
import useStore from "./store/useStore";
import {settlementsService} from "../services";
import router from "../router";
import {_updateSettlement} from "../services/avicolappAssembler";

const {state} = useStore();
let hasActiveSettlementResolve;
const hasActiveSettlement = new Promise(resolve => {hasActiveSettlementResolve = resolve});
const activeSettlement = ref();
const settlements = ref();

const refreshActiveSettlement = async () => {
    const ACTIVE_SETTLEMENT_ID = localStorage.getItem(`activeSettlement-${state.user.uid}`);
    if (ACTIVE_SETTLEMENT_ID)
        settlementsService.one(ACTIVE_SETTLEMENT_ID)
            .then(response => {
                activeSettlement.value = response;
                hasActiveSettlementResolve();
                _updateSettlement(activeSettlement.value.id);
            })
            .catch(() => {
                localStorage.removeItem(`activeSettlement-${state.user.uid}`);
                refreshActiveSettlement();
            });
    else
        settlementsService.first()
            .then(response => {
                activeSettlement.value = response;
                hasActiveSettlementResolve();
                _updateSettlement(activeSettlement.value.id);
                saveActiveSettlement(activeSettlement.value.id);
            })
            .catch(() => {
                activeSettlement.value = null;
                hasActiveSettlementResolve();
                router.push({name: 'createSettlements'});
            });
}

const saveActiveSettlement = (id) => localStorage.setItem(`activeSettlement-${state.user.uid}`, id);

const refreshSettlements = () => {
    settlementsService.all()
        .then(response => {
            settlements.value = response;
        });
}

const storeErrors = ref({});
const isOpenForm = ref(false);

const store = (attributes) => {
    attributes.user_id = state.user.uid;
    settlementsService.create(attributes).then((response) => {
        storeErrors.value = [];
        router.push({
            name: 'showSettlements', params: {id: response.data.id}
        });
    }).catch(error => {
        error.response.data.errors.errors.forEach(data => {
            storeErrors.value[data.param] = 'El valor ingresado es invalido';
        });
    })
}

const close = () => {
    isOpenForm.value = false
}

const open = () => {
    isOpenForm.value = true
}

export default function useSettlements() {
    return {
        open,
        close,
        store,
        isOpenForm,
        settlements,
        storeErrors,
        activeSettlement,
        refreshSettlements,
        hasActiveSettlement,
        saveActiveSettlement,
        refreshActiveSettlement
    }
}