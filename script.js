let toggle_btnn = document.getElementById("toggle_btnn");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let header_button = document.querySelector(".header_button");
let close_toogle = document.getElementById("close_toogle")
toggle_btnn.addEventListener('click', () => {
    nav.classList.toggle("add_class_in_nav");
    ul.classList.toggle("add_class_in_ul")
    header_button.classList.toggle("add_class_in_header_button")
    toggle_btnn.style.display = "none"
})
close_toogle.addEventListener('click', () => {
    toggle_btnn.style.display = "flex"
    ul.classList.toggle("add_class_in_ul")

});

// sticty nav bar

window.onscroll = function() { myFunction() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
let header_link = document.querySelectorAll(".header_link");
Array.from(header_link).forEach((button) => {
    button.addEventListener('click', () => {
        ul.classList.toggle("add_class_in_ul")
        toggle_btnn.style.display = "flex"
    })
})