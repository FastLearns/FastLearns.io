let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('darkMode');
    
    if(document.body.classList.contains('darkMode')){
        localStorage.setItem('dark-mode', 'true');        
    } else{
        localStorage.setItem('dark-mode', 'false');
    }
};

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('darkMode');
    darkModeIcon.classList.add('bx-sun');
} else{
    document.body.classList.remove('darkMode');
    darkModeIcon.classList.remove('bx-sun');
}


const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navFix = document.querySelector(".btns-nav")
const navIcon = document.querySelector(".bx-menu-alt-right")

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu_visible");
    navFix.classList.toggle("nav-fixed")
    navIcon.classList.toggle("bx-x-circle")
});

