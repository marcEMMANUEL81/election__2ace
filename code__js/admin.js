const content = document.querySelector(".tableau")
const affichage = [tab__code, cunsum__candidate, candidate]
const btn = document.querySelector(".validate")
content.innerHTML = affichage[0]

affichage0()
document.querySelector('.tab').addEventListener('change', function () {

    index = document.querySelector('.tab').value
    if(index == 0)
        affichage0()
    else if(index == 1)
        affichage1()

})

let show__button = false

const activer = document.querySelector(".activer")
const desactiver = document.querySelector(".desactiver")

activer.addEventListener("click", function(){
    show__button = true
})

desactiver.addEventListener("click", function(){
    show__button = false
})

console.log(show__button)