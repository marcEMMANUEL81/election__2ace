const submit__btn = document.querySelector(".submit__btn")
const pop__up = document.querySelector(".pop__up")
const close = document.querySelector(".close")

submit__btn.addEventListener("click", function(){
    pop__up.classList.add("visible")
})

close.addEventListener("click", function(){
    pop__up.classList.remove("visible")
})