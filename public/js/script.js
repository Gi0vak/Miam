const menu = document.querySelector(".lines-burger");
const nav = document.querySelector(".nav");
console.log(nav);

console.log(menu);

menu.addEventListener('click', function (e) {
    nav.classList.toggle('active');
    console.log(e);
})
