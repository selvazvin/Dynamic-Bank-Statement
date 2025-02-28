document.addEventListener("DOMContentLoaded", function () {
    let sidenav = document.querySelector(".side-navbar");

    function showNavbar() {
        sidenav.style.left = "0%";
    }

    function closeNavbar() {
        sidenav.style.left = "-50%";
    }

    document.querySelector(".navbar-menu-toggle").addEventListener("click", showNavbar);
    document.querySelector(".side-navbar p").addEventListener("click", closeNavbar);
});


var signupoff=document.querySelector(".signupoff")
var close=document.getElementById("offer-close")

close.addEventListener("click",function()
{
    signupoff.style.display="none"
});