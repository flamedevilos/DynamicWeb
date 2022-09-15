// Navigation Menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => 
{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Vieo slider
const slidBtn = document.querySelectorAll(".nav-btn");
const slidVid = document.querySelectorAll(".video-slider");
const content = document.querySelectorAll(".content");

var slidNav = function(manuel) {
    slidBtn.forEach((btn) => {
        btn.classList.remove("active");
    });

    slidVid.forEach((slid) => {
        slid.classList.remove("active");
    });

    content.forEach((cont) => {
        cont.classList.remove("active");
    });


    slidBtn[manuel].classList.add("active");
    slidVid[manuel].classList.add("active");
    content[manuel].classList.add("active");
}

slidBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slidNav(i);
    });
});