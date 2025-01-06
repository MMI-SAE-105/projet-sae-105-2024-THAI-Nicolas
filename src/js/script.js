const toggle = document.querySelector(".header__end--menubtn");
const nav = document.querySelector(".menu");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".menu__closebtn");
const toggleLang = document.querySelector(".header__end--langbtn");
const navLang = document.querySelector(".lang");

//Pour le Menu principale et le menu langue//
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    if (isOpen) {
        body.classList.remove("noscroll");
    }
    else {
        body.classList.add("noscroll");
    }
})
closeBtn.addEventListener("click", () => {
    nav.ariaHidden = true;
    toggle.ariaExpanded = false;
    body.classList.remove("noscroll");
});

toggleLang.addEventListener("click", () => {
    const isOpen = toggleLang.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    navLang.ariaHidden = isOpen;
    toggleLang.ariaExpanded = isClosed;
    if (isOpen) {
        bodyLang.classList.remove("noscroll");
    }
    else {
        bodyLang.classList.add("noscroll");
    }
})

//Pour le barre de recherche du glossaire//
const definitions = ["Autonomie", "Biomasse", "Dystopie", "Entité Divine", "IA", "Cueillette", "Offrandes", "Préhistoire"];

