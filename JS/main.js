// Filter Js
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".cours-box").show('1000');
        } else {
            $(".cours-box")
                .not("." + value)
                .hide("1000");
            $(".cours-box")
                .filter("." + value)
                .show("1000");
        }
    });
    // add active to btn
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Header Background Change On scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

// Mémoriser le thème dans localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(savedTheme);
    themeToggleButton.innerHTML = savedTheme === 'dark-mode' ? '<i class="bx bx-moon"></i>' : '<i class="bx bx-sun"></i>';
}

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleButton.innerHTML = '<i class="bx bx-moon"></i>';
        localStorage.setItem('theme', 'dark-mode'); // Sauvegarder le thème dans localStorage
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleButton.innerHTML = '<i class="bx bx-sun"></i>';
        localStorage.setItem('theme', 'light-mode'); // Sauvegarder le thème dans localStorage
    }
});