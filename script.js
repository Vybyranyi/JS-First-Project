const btn = document.querySelector('button')
const list = document.querySelector('ol')

btn.addEventListener('click', ()=>{
    list.classList.toggle("hidden")
})