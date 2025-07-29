
const pin = document.getElementById("pin").value.trim();
let accountBalance = 10000; // Example balance

const pinBoxes = document.querySelectorAll(".pinBox");
const checkBalanceBtn = document.getElementById("checkBalanceBtn");
const showBalanceDiv = document.getElementById("showBalance");


function maskAccountNumber(acNumber) {
    const last4 = acNumber.slice(-4);
    return "xxxxxxx" + last4;
}
function updateBalance(amount) {
    accountBalance += amount;
}


checkBalanceBtn.addEventListener("click", function () {
    // Combine values from all 4 input boxes
    let enteredPin = "";
    pinBoxes.forEach(box => {
        enteredPin += box.value;
    });

    if (enteredPin === correctUPIPin) {
        showBalanceDiv.innerHTML = `<b>Your Current Balance is: ₹${accountBalance}</b>`;
    } else {
        showBalanceDiv.innerHTML = `<span style="color: red;">Incorrect UPI Pin!</span>`;
    }

    // Clear all pin boxes
    pinBoxes.forEach(box => box.value = "");
    // showBalanceDiv.innerHTML =  "";
    pinBoxes[0].focus(); // cursor wapas pehle box me le aao
});

pinBoxes.forEach((box, index) => {
    box.addEventListener("input", () => {
        if (box.value.length === 1 && index < pinBoxes.length - 1) {
            pinBoxes[index + 1].focus();
        }
    });
});