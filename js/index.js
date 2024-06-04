const sideMenu = document.getElementById("sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}

function closemenu() {
    sideMenu.style.right = "-200px";
}


const infoBtn = document.getElementById("info-btn");
const skillBtn = document.getElementById("skill-btn");
const expBtn = document.getElementById("exp-btn");
const educBtn = document.getElementById("educ-btn");

const info = document.querySelector(".info");
const skill = document.querySelector(".skills");
const exp = document.querySelector(".experience");
const educ = document.querySelector(".education");

infoBtn.addEventListener("click", function() {
    info.classList.add("active");
    skill.classList.remove("active");
    exp.classList.remove("active");
    educ.classList.remove("active");

    //Button Style toggle
    infoBtn.classList.add("active-btn");
    skillBtn.classList.remove("active-btn");
    expBtn.classList.remove("active-btn");
    educBtn.classList.remove("active-btn");
});

skillBtn.addEventListener("click", function() {
    skill.classList.add("active");
    info.classList.remove("active");
    exp.classList.remove("active");
    educ.classList.remove("active");

    //Button Style toggle
    skillBtn.classList.add("active-btn");
    infoBtn.classList.remove("active-btn");
    expBtn.classList.remove("active-btn");
    educBtn.classList.remove("active-btn");
});

expBtn.addEventListener("click", function() {
    skill.classList.remove("active");
    info.classList.remove("active");
    exp.classList.add("active");
    educ.classList.remove("active");

    //Button Style toggle
    expBtn.classList.add("active-btn");
    skillBtn.classList.remove("active-btn");
    infoBtn.classList.remove("active-btn");
    educBtn.classList.remove("active-btn");
});

educBtn.addEventListener("click", function() {
    skill.classList.remove("active");
    info.classList.remove("active");
    exp.classList.remove("active");
    educ.classList.add("active");

    //Button Style toggle
    educBtn.classList.add("active-btn");
    skillBtn.classList.remove("active-btn");
    infoBtn.classList.remove("active-btn");
    expBtn.classList.remove("active-btn");
});