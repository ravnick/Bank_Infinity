const sections = document.querySelectorAll(".child-container > div");
const buttons = document.querySelectorAll(".buttons > button");
const submit = document.getElementById("submit");
const depositeForm = document.getElementById("AmountDeposite");
const showRecipt = document.getElementById("showRecipt");
const showDisplay = document.getElementById("showDisplay");
const historyContainer = document.getElementById("history-container");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.id.replace("Btn", "");
        // for balance page clear show balance
        showBalanceDiv.textContent = "";

        sections.forEach(section => {
            section.style.display = (section.id === targetId) ? "flex" : "none";
        });
    });
});

depositeForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form reload

    const userNameE1 = document.getElementById("userName").value.trim();
    const accountNumberE1 = document.getElementById("accountNumber").value.trim();
    const ifscCodeE1 = document.getElementById("ifscCode").value.trim();
    const amountE1 = Number(document.getElementById("amount").value.trim());


    // ✅ Validation
    if (!userNameE1 || !accountNumberE1 || !ifscCodeE1 || !amountE1) {
        showAlert("❌ All fields are required!");
        return;
    }

    // ✅ Create history card
    const historyCard = document.createElement("div");
    historyCard.classList.add("card");

    historyCard.innerHTML = `  
        <p><b style="color: green;">Amount Deposited</b></p>  
        <p><b>Your Name:</b> ${userNameE1}</p>    
        <p><b>A/C Number:</b> ${maskAccountNumber(accountNumberE1)}</p>   
        <p><b>IFSC Code:</b> ${ifscCodeE1}</p>      
        <p><b>Deposit Amount:</b> ₹${amountE1}</p>    
        <p><b>Amount Deposited On:</b> ${watch()}</p>
    `;

    historyContainer.appendChild(historyCard);

    // ✅ Show receipt
    showDisplay.innerHTML = historyCard.innerHTML;
    updateBalance(amountE1);

    // ✅ Show success
    showAlert("Deposit is successful ✅");

    // ✅ Reset form
    depositeForm.reset();
});



const transferForm = document.getElementById("AmountTransfer");

transferForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Form submission rokna

    const senderAccount = document.getElementById("senderAccount").value.trim();
    const receiverAccount = document.getElementById("receiverAccount").value.trim();
    const receiverIFSC = document.getElementById("receiverIFSC").value.trim();
    const transferAmount = Number(document.getElementById("transferAmount").value.trim());

    if (!senderAccount || !receiverAccount || !receiverIFSC || !transferAmount) {
        showAlert("❌ All fields are required!");
        return; // Validation fail hone par baaki code execute na ho
    }
    if (transferAmount > accountBalance) {
        showAlert("❌ Insufficient Balance!");
        return;
    }

    accountBalance -= transferAmount;

    showAlert(`✅ ₹${transferAmount} transferred successfully!`);

    const historyCard = document.createElement("div");
    historyCard.classList.add("card");

    historyCard.innerHTML = `  
        <p><b style="color: red;">Amount Transferred</b></p>  
        <p><b>Sender A/C Number:</b> ${maskAccountNumber(senderAccount)}</p>    
        <p><b>Receiver A/C Number:</b> ${maskAccountNumber(receiverAccount)}</p> 
        <p><b>Receiver IFSC Code:</b> ${receiverIFSC}</p>           
        <p><b>Transfer Amount:</b> ₹${transferAmount}</p>       
        <p><b>Amount Transferred On:</b> ${watch()}</p>           
    `;

    historyContainer.appendChild(historyCard);

    // ✅ Show receipt
    showDisplay.innerHTML = historyCard.innerHTML;

    // showAlert("Transfer is successful ✅");
    transferForm.reset(); // Form reset after successful transfer
});


function trans() {
    showRecipt.style.display = "flex";
}

function back() {
    showRecipt.style.display = "none";
}



function showAlert(msg) {
    document.getElementById("alertMsg").innerText = msg;
    document.getElementById("customAlert").classList.remove("hidden");
}

function hideAlert() {
    document.getElementById("customAlert").classList.add("hidden");
}










































// const home = document.getElementById("home");
// const diposite = document.getElementById("diposite");
// const transfer = document.getElementById("transfer");
// const checkBalance = document.getElementById("checkBalance");
// const historyShow = document.getElementById("historyShow");

// const homeBtn = document.getElementById("homeBtn");
// const depositeBtn = document.getElementById("depositeBtn");
// const transferBtn = document.getElementById("transferBtn");
// const checkBalanceBtn = document.getElementById("checkBalanceBtn");
// const showHistoryBtn = document.getElementById("showHistoryBtn");

// const sections = [home, diposite, transfer, checkBalance, historyShow];

// function showOnly(element) {
//     sections.forEach(sec => {
//         sec.style.display = "none";
//     });
//     element.style.display = "flex"
// }

// homeBtn.addEventListener("click", function (event) {
//     showOnly(home);
//     event.stopPropagation();
// });
// depositeBtn.addEventListener("click", function (event) {
//     showOnly(diposite);
//     event.stopPropagation();
// });
// transferBtn.addEventListener("click", function (event) {
//     showOnly(transfer);
//     event.stopPropagation();
// });
// checkBalanceBtn.addEventListener("click", function (event) {
//     showOnly(checkBalance);
//     event.stopPropagation();
// });
// showHistoryBtn.addEventListener("click", function (event) {
//     showOnly(historyShow);
//     event.stopPropagation();
// });

