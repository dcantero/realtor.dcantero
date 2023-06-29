var mobileMenuIcon = document.querySelector(".mobile-menu-icon");
var mobileMenu = document.querySelector(".mobile-menu-list");
var siteContent = document.querySelector("#site-content");

mobileMenuIcon.addEventListener("click", function () {

    mobileMenu.classList.toggle("mobile-menu-list-active");
    siteContent.classList.toggle("site-content-active");
    
});


// if(mobileMenu.style.display == "block"){
    //     mobileMenu.style.display = "none";
    // } else{
    //     mobileMenu.style.display = "block";
    // }