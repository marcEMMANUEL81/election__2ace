const my__button = document.querySelector(".my__button")

my__button.addEventListener("click", function(){
    window.location.href="../pages__html/vote__mensa.html"
})

const icon = document.querySelector(".icon")
const nav__bar = document.querySelector(".nav__bar")
const menu__btn = document.querySelector(".menu__btn")

menu__btn.addEventListener("click", function(){
    nav__bar.classList.toggle("complete")
})


if (show__button == false){
    my__button.innerHTML = ''
}

console.log(show__button)