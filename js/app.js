const menu = document.querySelector(".menu-list");
const menu_btn = document.querySelector(".menu-btn");
const cancel_menu_btn = document.querySelector(".cancel-menu-btn");

menu_btn.onclick = () => {
    menu.classList.add("active");
    menu_btn.classList.add("hide");
}

cancel_menu_btn.onclick = () => {
    menu.classList.remove("active");
    menu_btn.classList.remove("hide");
}


