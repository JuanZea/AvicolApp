import {settlementsService} from "../services";
import firebase from "firebase/app";
import router from "../router";
import { ref } from "vue";

let errors = ref([]);
let isOpenForm = ref(false);

const store = (attributes) => {
    attributes.user_id = firebase.auth().currentUser.uid
    settlementsService.create(attributes).then((response) => {
        errors = [];
        router.push({
            name: 'showSettlements', params: {id: response.data.id}
        });
    }).catch(error => {
        errors.value = error.response.data.errors.errors;
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
        errors,
        open,
        isOpenForm,
        close
    }
}