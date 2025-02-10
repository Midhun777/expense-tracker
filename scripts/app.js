var expDataLs;

function loadExpenses() {

    expDataLs = localStorage.getItem("expenses");
    console.log("expDataLs");
    console.log(JSON.parse(expDataLs));
    var expDataJson = JSON.parse(expDataLs);


    // let expArr = db.expenseArr;
    expDataJson.forEach(exp => {
        expCont.innerHTML += `
<div
                        class="exp-card mt-4 w-full lg:w-[32%] bg-priRed h-[4.7em] lg:h-20 border-2 border-black rounded-lg shadow-md flex mb-1">
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

loadExpenses(); 

submitExp.addEventListener("click", function () {
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
    localStorage.setItem("expenses", JSON.stringify(db.expenseArr));
    // console.log(db.expenseArr);
    console.log("Expense added");
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
    hidePopup();
    // clearForm();
    // }

    function clearForm() {
        expName.value = "";
        expAmt.value = "";
        expDate.value = "";
        expCat.value = "";
        expDesc.value = "";
    }
});



submitOwe.addEventListener("click", function () {
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
    localStorage.setItem("expenses", JSON.stringify(db.owesArr));
    // console.log(db.expenseArr);
    console.log("Expense added");
    popupCont.classList.add("hidden");
    popupCont.classList.remove("flex");
    hidePopup();
    // clearForm();
    // }

    function clearForm() {
        oweName.value = "";
        oweAmt.value = "";
        oweDate.value = "";
        oweCat.value = "";
        oweDesc.value = "";
    }
});


