import { reactive, ref } from "vue";

const open = reactive({
    createSettlementsModal: false,
    deleteSettlementsModal: false,
    createBarnsModal: false,
    deleteBarnsModal: false,
    createLotsModal: false,
    deleteLotsModal: false,
});

const payload = ref({});

const openModal = (name, pPayload) => {
    if (pPayload) payload.value = pPayload;
    open[`${name}sModal`] = true;
}

export default function useModals() {
    return {
        open,
        payload,
        openModal
    }
}