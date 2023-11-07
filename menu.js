const menuHeader = document.querySelector(".menu__header");
const navBar = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu__nav-icon");
const menuActive = false;
const arrowUp = document.querySelector(".arrow-up__container");
const newPortfolio = document.querySelector("#new-portfolio");

sessionStorage.setItem("tasks", JSON.stringify(menuActive));

menuIcon.addEventListener("click", ()=>{
    const check = JSON.parse(sessionStorage.getItem("tasks"));
    if(!check){
        navBar.style.display = "block";
        if(window.innerWidth <= 425){
            menuHeader.style.justifyContent = "center";
            menuHeader.style.marginLeft = "0";
        }
        sessionStorage.setItem("tasks", JSON.stringify(true));
    }else{
        navBar.style.display = "none";
        if(window.innerWidth <= 425){
            menuHeader.style.justifyContent = "flex-start";
            menuHeader.style.marginLeft = "50px";
        }
        sessionStorage.setItem("tasks", JSON.stringify(false));
    }
})
arrowUp.addEventListener("click", () =>{
    navigator.vibrate(25);
})