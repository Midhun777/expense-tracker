let isLSAvailableExp = localStorage.getItem("expenses");
let isLSAvailableOwe = localStorage.getItem("owes");
let isLSAvailableLend = localStorage.getItem("lends");

const db = {
    expenseArr: [],
    owesArr: [],
    lendsArr: []
};

if (isLSAvailableExp) {
    console.log("Expense Data found in local storage");
    loadExpenses();
}
if (isLSAvailableOwe) {
    console.log("Owes Data found in local storage");
    loadOwes();
}
if (isLSAvailableLend) {
    console.log("Lends Data found in local storage");
    loadLends();
}
if (!isLSAvailableExp) {
    console.log("No Expense data found in local storage");
}
if (!isLSAvailableOwe) {
    console.log("No Owe data found in local storage");
}
if (!isLSAvailableLend) {
    console.log("No Lend data found in local storage");
}

function loadExpenses() {

    var expDataLs = localStorage.getItem("expenses");
    // var oweDataLs = localStorage.getItem("owes");
    // var lendDataLs = localStorage.getItem("lends");

    var expDataJson = JSON.parse(expDataLs);
    // var oweDataJson = JSON.parse(oweDataLs);
    // var lendDataJson = JSON.parse(lendDataLs);

    expDataLs = localStorage.getItem("expenses");
    console.log("Loaded Expense Data From Local Storage");
    console.log(JSON.parse(expDataLs));

    expDataJson.forEach(exp => {
        expCont.innerHTML += `
                    <div class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${exp.name}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${exp.description} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${exp.date}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${exp.amount}</div>
                    </div>
        `
    });
}

function loadOwes() {
    // var expDataLs = localStorage.getItem("expenses");
    var oweDataLs = localStorage.getItem("owes");
    // var lendDataLs = localStorage.getItem("lends");

    // var expDataJson = JSON.parse(expDataLs);
    var oweDataJson = JSON.parse(oweDataLs);
    // var lendDataJson = JSON.parse(lendDataLs);

    oweDataLs = localStorage.getItem("owes");
    console.log("Loaded Owes Data From Local Storage");
    console.log(JSON.parse(oweDataLs));

    // let expArr = db.expenseArr;
    oweDataJson.forEach(exp => {
        oweCont.innerHTML += `
                    <div class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${exp.name}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${exp.description} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${exp.date}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${exp.amount}</div>
                    </div>
        `
    });
}

function loadLends() {
    // var expDataLs = localStorage.getItem("expenses");
    // var oweDataLs = localStorage.getItem("owes");
    var lendDataLs = localStorage.getItem("lends");

    // var expDataJson = JSON.parse(expDataLs);
    // var oweDataJson = JSON.parse(oweDataLs);
    var lendDataJson = JSON.parse(lendDataLs);

    lendDataLs = localStorage.getItem("lends");
    console.log("Loaded Lends Data From Local Storage");
    console.log(JSON.parse(lendDataLs));

    // let expArr = db.expenseArr;
    lendDataJson.forEach(exp => {
        lendCont.innerHTML += `
                    <div class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${exp.name}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${exp.description} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${exp.date}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${exp.amount}</div>
                    </div>
        `
    });
}

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

    expCont.innerHTML += `<div
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

    console.log(expObj);
    db.expenseArr.push(expObj);
    console.log(db.expenseArr);
    localStorage.setItem("expenses", JSON.stringify(db.expenseArr));
    console.log("Expense added");
    console.log("Expense added to local storage");
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
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

    oweCont.innerHTML += `<div
                        class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${oweName.value}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${oweDesc.value} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${oweDate.value}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${oweAmt.value}</div>
                    </div>`;

    console.log(oweObj);
    db.owesArr.push(oweObj);
    localStorage.setItem("owes", JSON.stringify(db.owesArr));
    // console.log(db.expenseArr);
    console.log("Owe added");
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
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

    lendCont.innerHTML += `<div
                        class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
                        <div class="card-left w-9/12">
                            <p id="expCardTitle"
                                class="text-xl font-semibold ml-3 text-textColLight mt-2 lg:mt-2">${lendName.value}</p>
                            <p id="expCardDesc"
                                class="lg:text-sm text-sm ml-3 text-textColLight mt-2 lg:mt-2 font-medium mb-[-10px]">${lendDesc.value} <span> : </span><span id="expCardDate"
                                    class="date text-[1em] lg:inline md:hidden">
                                    ${lendDate.value}</span></p>
                        </div>
                        <div
                            class="card-right w-3/12 flex justify-center items-center text-2xl lg:text-3xl font-medium text-textColLight">₹${lendAmt.value}</div>
                    </div>`;


    console.log(lendObj);
    db.lendsArr.push(lendObj);
    localStorage.setItem("lends", JSON.stringify(db.lendsArr));
    // console.log(db.expenseArr);
    console.log("Owe added");
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
    hidePopup();
    // clearForm();
    // }

});



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