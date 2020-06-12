document.addEventListener("DOMContentLoaded", ()=>{
    
    let menuIcono = document.getElementById("header-menu-icono");
    let menuLinks = document.getElementById("header-menu-links");

    menuIcono.addEventListener("click", ()=>{
        menuLinks.classList.toggle("menu-display");
    }); 

});