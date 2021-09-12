import {useSettlements, useStore} from "../use";
import {watch} from "vue";
const {state} = useStore();

export const init = async (to, from, next) => {
    if (!state.firebase.toString().includes('Promise')) next();
    else {
        state.firebase = await state.firebase;
        state.loading = false;
        console.log(state)
        next();
    }
}

export const isGuest = (to, from, next) => {
    if (state.user !== null) next({name: 'home'});
    else next();
}

export const isAuth = (to, from, next) => {
    if (state.user === null) next({name: 'login'});
    else next();
}

export const needSettlement = async (to, from, next) => {
    const {hasActiveSettlement, activeSettlement} = useSettlements();
    await hasActiveSettlement;
    if (activeSettlement.value) {
        if (to.meta.noSettlement) next({name: 'home'});
        else next();
    } else {
        if (to.meta.noSettlement) next();
        else next({name: 'createSettlements'});
    }

}