var mobileMenuIcon = document.querySelector(".mobile-menu-icon");
var mobileMenu = document.querySelector(".mobile-menu-list");
var siteContent = document.querySelector("#site-content");

mobileMenuIcon.addEventListener("click", function () {

    if(!mobileMenu.classList.contains("mobile-menu-list-active")){
    mobileMenu.classList.add("mobile-menu-list-active");
    siteContent.classList.add("site-content-active");
    mobileMenu.classList.remove("mobile-menu-list-inactive");
        siteContent.classList.remove("site-content-inactive");
    } else{
      
        mobileMenu.classList.add("mobile-menu-list-inactive");
        siteContent.classList.add("site-content-inactive");
        mobileMenu.classList.remove("mobile-menu-list-active");
        siteContent.classList.remove("site-content-active");
       
    }
});



// if(mobileMenu.style.display == "block"){
    //     mobileMenu.style.display = "none";
    // } else{
    //     mobileMenu.style.display = "block";
    // }