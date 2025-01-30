const expNav = document.getElementById("expNav");
const oweNav = document.getElementById("oweNav");
const lendNav = document.getElementById("lendNav");

const expCont = document.getElementById("exp-cont");
const oweCont = document.getElementById("owe-cont");
const lendCont = document.getElementById("lend-cont");
const expPopup = document.getElementById("expPopup");
const closePopup = document.getElementById("closePopup");
const cancelPopup = document.getElementById("cancelPopup");

const addExpBtn = document.getElementById("addExpBtn");
const addOweBtn = document.getElementById("addOweBtn");
const addLendBtn = document.getElementById("addLendBtn");


expNav.addEventListener("click", function () {
    addExpBtn.classList.remove("hidden");
    addExpBtn.classList.add("flex");
    addOweBtn.classList.add("hidden");
    addOweBtn.classList.remove("flex");
    addLendBtn.classList.add("hidden");
    addLendBtn.classList.remove("flex");
    expCont.classList.add("flex");
    oweCont.classList.add("hidden");
    lendCont.classList.add("hidden");
    expCont.classList.remove("hidden");
    oweCont.classList.remove("flex");
    lendCont.classList.remove("flex");
});

oweNav.addEventListener("click", function () {
    addExpBtn.classList.add("hidden");
    addExpBtn.classList.remove("flex");
    addOweBtn.classList.remove("hidden");
    addOweBtn.classList.add("flex");
    addLendBtn.classList.add("hidden");
    addLendBtn.classList.remove("flex");
    expCont.classList.add("hidden");
    oweCont.classList.add("flex");
    lendCont.classList.add("hidden");
    expCont.classList.remove("flex");
    oweCont.classList.remove("hidden");
    lendCont.classList.remove("flex");
});

lendNav.addEventListener("click", function () {
    addExpBtn.classList.add("hidden");
    addExpBtn.classList.remove("flex");
    addOweBtn.classList.add("hidden");
    addOweBtn.classList.remove("flex");
    addLendBtn.classList.remove("hidden");
    addLendBtn.classList.add("flex");
    addLendBtn.classList.add("flex");
    addLendBtn.classList.remove("hidden");
    oweCont.classList.add("hidden");
    lendCont.classList.add("flex");
    expCont.classList.remove("flex");
    oweCont.classList.remove("flex");
    lendCont.classList.remove("hidden");
});

addExpBtn.addEventListener("click", function () {
    expPopup.classList.add("flex");
    expPopup.classList.remove("hidden");
});

closePopup.addEventListener("click", function () {
    expPopup.classList.add("hidden");
    expPopup.classList.remove("flex");
});

cancelPopup.addEventListener("click", function () {
    expPopup.classList.add("hidden");
    expPopup.classList.remove("flex");
});

