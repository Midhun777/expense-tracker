let isLSAvailableExp = localStorage.getItem("expenses");
let isLSAvailableOwe = localStorage.getItem("owes");
let isLSAvailableLend = localStorage.getItem("lends");


const db = {
    expenseArr: [],
    owesArr: [],
    lendsArr: []
};

function rewriteObj() {
    db.expenseArr = JSON.parse(localStorage.getItem("expenses")) || [];
    db.owesArr = JSON.parse(localStorage.getItem("owes")) || [];
    db.lendsArr = JSON.parse(localStorage.getItem("lends")) || [];
}

function checkAndLoadData(type, container) {
    let data = localStorage.getItem(type);
    if (data) {
        console.log(`${type} Data found in local storage`);
        loadSaveData(type, container);
    } else {
        console.log(`No ${type} data found in local storage`);
    }
}

checkAndLoadData("expenses", expCont);
checkAndLoadData("owes", oweCont);
checkAndLoadData("lends", lendCont);
rewriteObj();

submitExp.addEventListener("click", function () {
    console.log("clicked submit expense")
    let expName = document.getElementById("title");
    let expAmt = document.getElementById("price");
    let expDate = document.getElementById("date");
    let expCat = document.getElementById("category");
    let expDesc = document.getElementById("note");

    // console.log("Expense submitted");
    // if (expName.value === "" || expAmt.value === "" || expDate.value === "" || expCat.value === "" || expDesc.value === "") {
    // alert("Please fill all the fields");
    // } else {
    console.log(expName.value, expAmt.value, expDate.value, expCat.value, expDesc.value);

    let expObj = {
        name: expName.value,
        amount: Number(expAmt.value),
        date: expDate.value,
        category: expCat.value,
        description: expDesc.value
    };

    renderCards(expCont, expName, expAmt, expDate, expDesc);
    saveData("expenses", expObj, db.expenseArr);

    hidePopup();
    // clearForm();
    // }

});


submitOwe.addEventListener("click", function () {
    console.log("clicked submit owe")
    let oweName = document.getElementById("title");
    let oweAmt = document.getElementById("price");
    let oweDate = document.getElementById("date");
    let oweCat = document.getElementById("category");
    let oweDesc = document.getElementById("note");

    // console.log("Expense submitted");
    // if (expName.value === "" || expAmt.value === "" || expDate.value === "" || expCat.value === "" || expDesc.value === "") {
    // alert("Please fill all the fields");
    // } else {
    // console.log(expName.value, expAmt.value, expDate.value, expCat.value, expDesc.value);

    let oweObj = {
        name: oweName.value,
        amount: Number(oweAmt.value),
        date: oweDate.value,
        category: oweCat.value,
        description: oweDesc.value
    };

    renderCards(oweCont, oweName, oweAmt, oweDate, oweDesc);
    saveData("owes", oweObj, db.owesArr);

    console.log("Owe added");
    hidePopup();
    // clearForm();
    // }

});

submitLend.addEventListener("click", function () {
    console.log("clicked submit lend")

    let lendName = document.getElementById("title");
    let lendAmt = document.getElementById("price");
    let lendDate = document.getElementById("date");
    let lendCat = document.getElementById("category");
    let lendDesc = document.getElementById("note");

    // console.log("Expense submitted");
    // if (expName.value === "" || expAmt.value === "" || expDate.value === "" || expCat.value === "" || expDesc.value === "") {
    // alert("Please fill all the fields");
    // } else {
    // console.log(expName.value, expAmt.value, expDate.value, expCat.value, expDesc.value);

    let lendObj = {
        name: lendName.value,
        amount: Number(lendAmt.value),
        date: lendDate.value,
        category: lendCat.value,
        description: lendDesc.value
    };

    renderCards(lendCont, lendName, lendAmt, lendDate, lendDesc);
    saveData("lends", lendObj, db.lendsArr);

    hidePopup();
    // clearForm();
    // }

});


function loadSaveData(type, container) {
    ;

    var dataLs = localStorage.getItem(type);
    const dataJson = JSON.parse(dataLs);
    console.log(`Loaded ${type} Data From Local Storage`);
    console.log(JSON.parse(dataLs));

    dataJson.forEach(item => {
        container.innerHTML += `
        <div class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
            <div class="card-left w-9/12">
                <p id="expCardTitle"
                    class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${item.name}</p>
                <p id="expCardDesc"
                    class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${item.description} <span> : </span><span id="expCardDate"
                        class="date text-[1em] lg:inline md:hidden">
                        ${item.date}</span></p>
            </div>
            <div
                class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${item.amount}</div>
        </div>
`;
    });
}

function renderCards(container, expName, expAmt, expDate, expDesc) {
    container.innerHTML += `<div
                        class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${expName.value}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${expDesc.value} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${expDate.value}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${expAmt.value}</div>
                    </div>`;
}

function generateHTMLCard() {
    container.innerHTML += `
                    <div class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${item.name}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${item.description} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${item.date}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${item.amount}</div>
                    </div>
        `;
}

function saveData(type, obj, arr) {
    arr.push(obj);
    console.log(arr);
    localStorage.setItem(type, JSON.stringify(arr));
    console.log(`${type} added to local storage`);
}

function hidePopup() {
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
}

function clearForm() {
    let expName = document.getElementById("title");
    let expAmt = document.getElementById("price");
    let expDate = document.getElementById("date");
    let expCat = document.getElementById("category");
    let expDesc = document.getElementById("note");

    expName.value = "";
    expAmt.value = "";
    expDate.value = "";
    expCat.value = "";
    expDesc.value = "";
}