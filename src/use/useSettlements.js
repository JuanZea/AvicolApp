import { ref } from "vue";
import vuexStore from "../store";
import {settlementsService} from "../services";
import router from "../router";

const activeSettlement = async () => {
    const ACTIVE_SETTLEMENT_ID = localStorage.getItem(`activeSettlement-${vuexStore.state.user.uid}`);
    if (ACTIVE_SETTLEMENT_ID) return settlementsService.one(ACTIVE_SETTLEMENT_ID);
    // return settlementsService.first();
}

const storeErrors = ref({});
const isOpenForm = ref(false);

const store = (attributes) => {
    attributes.user_id = vuexStore.state.user.uid;
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
        activeSettlement,
        store,
        storeErrors,
        open,
        isOpenForm,
        close
    }
}