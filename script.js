const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}