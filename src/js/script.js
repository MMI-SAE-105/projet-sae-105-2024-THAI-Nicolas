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

//Pour le carousel de la section "Autres projets"//
const carousel = document.querySelector(".autres-projets__flexbox");
const prevButton = document.querySelector(".autres-projets__left-arrow");
const nextButton = document.querySelector(".autres-projets__right-arrow");



if (carousel) {
    const premierItem = document.querySelector(".autres-projets__container");
    const scrollAmount = premierItem.clientWidth;

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });




}




//Pour le barre de recherche du glossaire//
const definitions = ["Autonomie", "Biomasse", "Dystopie", "Entité Divine", "IA", "Cueillette", "Offrandes", "Préhistoire"];

