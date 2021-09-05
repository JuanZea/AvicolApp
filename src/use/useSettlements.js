import {settlementsService} from "../services";
// import firebase from "firebase/app";
import router from "../router";
import { ref } from "vue";

const storeErrors = ref({});
const isOpenForm = ref(false);

const store = (attributes) => {
    // attributes.user_id = firebase.auth().currentUser.uid
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
        store,
        storeErrors,
        open,
        isOpenForm,
        close
    }
}