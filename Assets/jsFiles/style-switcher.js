// toogle style switcher

const styleSwitcherToogle = document.querySelector(".style-switcher-toggler");

styleSwitcherToogle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// HIDE STYLE SWITCHER ON SCROLL

window.addEventListener("scroll", ()=> {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* THEME COLOURS */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

/* THEME light AND DARKMODE */

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light");
})

window.addEventListener("load", ()=> {
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})