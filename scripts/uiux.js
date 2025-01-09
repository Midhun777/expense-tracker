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
    // Show the Expense button; hide Owe and Lend buttons
    addExpBtn.classList.remove("hidden");
    addExpBtn.classList.add("flex");
    addOweBtn.classList.add("hidden");
    addOweBtn.classList.remove("flex");
    addLendBtn.classList.add("hidden");
    addLendBtn.classList.remove("flex");

    // Show the Expense container; hide Owe and Lend containers
    expCont.classList.remove("hidden");
    expCont.classList.add("flex");
    oweCont.classList.add("hidden");
    oweCont.classList.remove("flex");
    lendCont.classList.add("hidden");
    lendCont.classList.remove("flex");
});

oweNav.addEventListener("click", function () {
    secTitle.innerHTML = "Owes";
    // Show Owe button; hide Expense and Lend buttons
    addExpBtn.classList.add("hidden");
    addExpBtn.classList.remove("flex");
    addOweBtn.classList.remove("hidden");
    addOweBtn.classList.add("flex");
    addLendBtn.classList.add("hidden");
    addLendBtn.classList.remove("flex");

    // Show Owe container; hide Expense and Lend containers
    expCont.classList.add("hidden");
    expCont.classList.remove("flex");
    oweCont.classList.remove("hidden");
    oweCont.classList.add("flex");
    lendCont.classList.add("hidden");
    lendCont.classList.remove("flex");
});

lendNav.addEventListener("click", function () {
    secTitle.innerHTML = "Lends";
    // Show Lend button; hide Expense and Owe buttons
    addExpBtn.classList.add("hidden");
    addExpBtn.classList.remove("flex");
    addOweBtn.classList.add("hidden");
    addOweBtn.classList.remove("flex");
    addLendBtn.classList.remove("hidden");
    addLendBtn.classList.add("flex");

    // // Show Lend container hide Expense and Owe containers
    expCont.classList.add("hidden");
    expCont.classList.remove("flex");
    oweCont.classList.add("hidden");
    oweCont.classList.remove("flex");
    lendCont.classList.remove("hidden");
    lendCont.classList.add("flex");
});


addExpBtn.addEventListener("click", function () {
    popupCont.classList.add("flex");
    popupCont.classList.remove("hidden");
    showPopup();
});

addOweBtn.addEventListener("click", function () {
    popupCont.classList.add("flex");
    popupCont.classList.remove("hidden");
    console.log("owe btn clicked");
    showPopup();
    popupHead.innerHTML = "Add Owe";
    popupCatelabel.innerHTML = "Name";
    popupTitlelabel.innerHTML = "Title";
    popupPricelabel.innerHTML = "Amount";
    popupNotelabel.innerHTML = "Note";
});

addLendBtn.addEventListener("click", function () {
    popupCont.classList.add("flex");
    popupCont.classList.remove("hidden");
    console.log("lend btn clicked");
    showPopup();
    popupHead.innerHTML = "Add Lend";
    popupCatelabel.innerHTML = "Name";
    popupTitlelabel.innerHTML = "Title";
    popupPricelabel.innerHTML = "Amount";
    popupNotelabel.innerHTML = "Note";
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

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popupCont.classList.add("hidden");
        popupCont.classList.remove("flex");
        hidePopup();
    }
});

function showPopup() {
    popupCont.classList.remove("hidden");
    setTimeout(() => {
        popupCont.classList.add("opacity-100", "scale-100");
        popupCont.classList.remove("opacity-0", "scale-90");
    }, 30); // delay to allow transition
}

function hidePopup() {
    popupCont.classList.remove("opacity-100", "scale-100");
    popupCont.classList.add("opacity-0", "scale-90");

    setTimeout(() => {
        popupCont.classList.add("hidden");
    }, 400);
}
