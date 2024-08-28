document.getElementById("hamburger-menu").addEventListener("click", function() {
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
});
