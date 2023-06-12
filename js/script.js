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
