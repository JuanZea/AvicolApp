const openSideBar = function (id, size) {

    const el = document.getElementById(id);
    el.style.maxWidth = size + "px";

}

const closeSideBar = function (id) {

    const el = document.getElementById(id);
    el.style.maxWidth = null;

}

export { openSideBar, closeSideBar }