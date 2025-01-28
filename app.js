const expNav = document.getElementById("expNav");
const oweNav = document.getElementById("oweNav");
const lendNav = document.getElementById("lendNav");
const addExpBtn = document.getElementById("addExpBtn");

const expCont = document.getElementById("exp-cont");
const oweCont = document.getElementById("owe-cont");
const lendCont = document.getElementById("lend-cont");

expNav.addEventListener("click", function () {
    console.log('1')
    expCont.classList.add("flex");
    oweCont.classList.add("hidden");
    lendCont.classList.add("hidden");
    expCont.classList.remove("hidden");
    oweCont.classList.remove("flex");
    lendCont.classList.remove("flex");
});

oweNav.addEventListener("click", function () {
    console.log('2')
    expCont.classList.add("hidden");
    oweCont.classList.add("flex");
    lendCont.classList.add("hidden");
    expCont.classList.remove("flex");
    oweCont.classList.remove("hidden");
    lendCont.classList.remove("flex");
});

lendNav.addEventListener("click", function () {
    console.log('3')
    expCont.classList.add("hidden");
    oweCont.classList.add("hidden");
    lendCont.classList.add("flex");
    expCont.classList.remove("flex");
    oweCont.classList.remove("flex");
    lendCont.classList.remove("hidden");
})