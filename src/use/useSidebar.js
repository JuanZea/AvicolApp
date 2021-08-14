import {ref} from "vue";

let open = ref(false);

const openSideBar = function (id, size) {
    const el = document.getElementById(id);
    el.style.maxWidth = size + "px";
}

const closeSideBar = function (id) {
    const el = document.getElementById(id);
    el.style.maxWidth = null;
}

const toggleSidebar = () => {
    console.log('ALGO')
    if (open.value) {
        closeSideBar('sidebar');
        open.value = false;
    } else {
        openSideBar('sidebar', 288);
        open.value = true;
    }
}

export default function useSidebar () {
  return {
      open,
      toggleSidebar
  }
};