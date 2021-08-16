import { ref } from "vue";

let open = ref(false);

const openSideBar = function () {
    document.getElementById('wrapper').classList.remove('extend')
    open.value = true;
}

const closeSideBar = function () {
    document.getElementById('wrapper').classList.add('extend')
    open.value = false;
}

const toggleSidebar = () => {
    open.value ? closeSideBar() : openSideBar();
}

export default function useSidebar() {
    return {
        open,
        closeSideBar,
        toggleSidebar
    }
};