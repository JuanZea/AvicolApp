import store from "../store";

export const init = async (to, from, next) => {
    if (!store.state.firebase.toString().includes('Promise')) next();
    else {
        const firebase = await store.state.firebase;
        store.commit('set', {key: 'firebase', value: firebase});
        await store.dispatch('loading', false);
        next();
    }
}

export const isGuest = (to, from, next) => {
    if (store.state.user !== null) next({name: 'home'});
    else next();
}

export const isAuth = (to, from, next) => {
    if (store.state.user === null) next({name: 'login'});
    else next();
}

export const needSettlement = (to, from, next) => {
    console.log('MOID')
    if (store.state.settlement) {
        if (to.meta.noSettlement) next({name: 'home'});
        else next();
    } else {
        if (to.meta.noSettlement) next();
        else next({name: 'createSettlements'});
    }
}