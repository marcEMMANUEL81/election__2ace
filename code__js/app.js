const button = document.querySelector(".candidats__button")
const button2 = document.querySelector(".candidats__button2")
const candidats__container__part1 = document.querySelector(".candidats__container__part1")
const candidats__container__part2 = document.querySelector(".candidats__container__part2")
const banner1 = document.querySelector(".banner1")
const banner2 = document.querySelector(".banner2")
const candidats__button = document.querySelector(".candidats__button")
const candidats__button2 = document.querySelector(".candidats__button2")
const icon = document.querySelector(".icon")
const presentation__button = document.querySelector(".presentation__button")
const nav__bar = document.querySelector(".nav__bar")
const menu__btn = document.querySelector(".menu__btn")

menu__btn.addEventListener("click", function(){
    console.log("cliqué")
    nav__bar.classList.toggle("complete")
})


candidats__container__part1.addEventListener("mouseover", function(){
    button.classList.add("up")
    banner1.classList.add("scale")
    banner2.classList.add("blur")
})

candidats__container__part1.addEventListener("mouseleave", function(){
    button.classList.remove("up")
    banner1.classList.remove("scale")
    banner2.classList.remove("blur")
})

candidats__container__part2.addEventListener("mouseover", function(){
    button2.classList.add("up2")
    banner2.classList.add("scale")
    banner1.classList.add("blur")
})
candidats__container__part2.addEventListener("mouseleave", function(){
    button2.classList.remove("up2")
    banner2.classList.remove("scale")
    banner1.classList.remove("blur")
})

candidats__button2.addEventListener("click", function(){
    window.location.href="../pages__html/profil__mensa.html"
})

candidats__button.addEventListener("click", function(){
    window.location.href="../pages__html/fof.html"
})


presentation__button.addEventListener("mouseover", function(){
    icon.classList.add("extend")
})