// Sticky Navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var search = document.querySelector(".search-container");
    var contact = document.querySelector(".contact-container");
    var toggle = document.querySelector(".toggle-button");

    header.classList.toggle("sticky",window.scrollY > 0);
    search.classList.toggle("sticky",window.scrollY > 0);
    contact.classList.toggle("sticky",window.scrollY > 0);
    toggle.classList.toggle("sticky",window.scrollY > 0);
});

$(document).ready(function(){
    $('.menu').click(function(){
        $('ul').toggleClass('active');
    })
})