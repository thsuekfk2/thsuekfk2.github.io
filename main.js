const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',()=>{

    menu.classList.toggle('active')
});