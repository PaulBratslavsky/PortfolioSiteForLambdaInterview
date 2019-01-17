/****************************************
    MOBILE MENU TUGLE CONTROLS
 ***************************************/

// Declare and Initialize my variable
const mobileMenu = document.querySelector('.main-nav_container');
const hamburegerTuggleMenu = document.querySelector('div.container');

// Hide and Show Nav Menu 
function onClickMenuTuggle() {
    mobileMenu.classList.toggle('show');
}

// On menu close reset tuggle
function onClickResetToggle() {
    onClickMenuTuggle();
    hamburegerTuggleMenu.classList.toggle('transform');
}

// Transform Tuggle Button on Click and Show Menu
function onClickButtonTransform() {
    console.log("Button Clicked");
    hamburegerTuggleMenu.classList.toggle('transform');
    onClickMenuTuggle();
}

/****************************************
    MOBILE MENU HIDE ON SCROLL CONTROLS
 ***************************************/

let prevScrollPosition = window.pageYOffset;

window.onscroll = function() {

    const currentScrollPosition = window.pageYOffset;
  
    if (prevScrollPosition > currentScrollPosition) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-75px";
    }
    
    prevScrollPosition = currentScrollPosition; 
}