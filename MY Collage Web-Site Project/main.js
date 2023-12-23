const backToTopButton = document.getElementById('backToTopBtn');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
// Scroll to the top of the page when the button is clicked
backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
let header = document.querySelector("header");
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);
});


//  *****************************menu open & close function*********************************


let navlinks = document.getElementById("nav-links");

function showmenu() {
    navlinks.style.right = "0";
    navlinks.style.transition = "1s";
}

function hidemenu() {
    navlinks.style.right = "-200px";
    navlinks.style.transition = "1s";
}


// *********************************resorces*****************************************