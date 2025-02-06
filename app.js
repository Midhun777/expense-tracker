//Navigation
const expNav = document.getElementById("expNav");
const oweNav = document.getElementById("oweNav");
const lendNav = document.getElementById("lendNav");
const secTitle = document.getElementById("secTitle");
//
const expCont = document.getElementById("exp-cont");
const oweCont = document.getElementById("owe-cont");
const lendCont = document.getElementById("lend-cont");
const popupCont = document.getElementById("popupCont");
const closePopup = document.getElementById("closePopup");
const cancelPopup = document.getElementById("cancelPopup");

//Add Button
const addExpBtn = document.getElementById("addExpBtn");
const addOweBtn = document.getElementById("addOweBtn");
const addLendBtn = document.getElementById("addLendBtn");

//Popup
const popupHead = document.getElementById("popupHead");
const popupCatelabel = document.getElementById("popupCatelabel");
const popupTitlelabel = document.getElementById("popupTitlelabel");
const popupPricelabel = document.getElementById("popupPricelabel");
const popupNotelabel = document.getElementById("popupNotelabel");

expNav.addEventListener("click", function () {
    secTitle.innerHTML = "Expenses";
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
    secTitle.innerHTML = "Owes";
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
    secTitle.innerHTML = "Lends";
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
    popupCont.classList.add("flex");
    popupCont.classList.remove("hidden");
    showPopup();
});

closePopup.addEventListener("click", function () {
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
    hidePopup();
});

cancelPopup.addEventListener("click", function () {
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
    hidePopup();
});

function displayPopup(btn) {
    popupCont.classList.add("flex");
    popupCont.classList.remove("hidden");
    if (btn == "addOweBtn") {
        popupHead.innerHTML = "Add Owe";
        popupCatelabel.innerHTML = "Name";
        popupTitlelabel.innerHTML = "Title";
        popupPricelabel.innerHTML = "Amount";
        popupNotelabel.innerHTML = "Note";
    } else if (btn == "addLendBtn") {
        popupHead.innerHTML = "Add Lend";
        popupCatelabel.innerHTML = "Name";
        popupTitlelabel.innerHTML = "Title";
        popupPricelabel.innerHTML = "Amount";
        popupNotelabel.innerHTML = "Note";
    }
}

addOweBtn.addEventListener("click", function () {
    displayPopup('addOweBtn');
});

addLendBtn.addEventListener("click", function () {
    displayPopup('addLendBtn');
});

// popup animation

// Function to show the popup with animation
function showPopup() {
    popupCont.classList.remove("hidden");
    setTimeout(() => {
        popupCont.classList.add("opacity-100", "scale-100");
        popupCont.classList.remove("opacity-0", "scale-90");
    }, 30); // Short delay to allow transition
}

// Function to hide the popup with animation
function hidePopup() {
    popupCont.classList.remove("opacity-100", "scale-100");
    popupCont.classList.add("opacity-0", "scale-90");

    setTimeout(() => {
        popupCont.classList.add("hidden");
    }, 400); // Wait for transition to complete before hiding
}
=======
>>>>>>> 05f3fc42cad88c6fa3420d27f7638e6ebb98ae9d
