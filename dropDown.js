const dropdownBtn = document.querySelector("#dropdownId .dropbtn");
const dropdownContent = document.querySelector("#dropdownId .dropdown-content");

// Toggle dropdown visibility on click
dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent bubbling to window
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

// Hide dropdown if user clicks outside
window.addEventListener("click", () => {
    dropdownContent.style.display = "none";
});


document.getElementById("dropdownDepositeBtn").addEventListener("click", function () {
    showSection("diposite");
});

document.getElementById("dropdownTransferBtn").addEventListener("click", function () {
    showSection("transfer");
});

function showSection(sectionId) {
    if (showBalanceDiv) showBalanceDiv.textContent = "";

    sections.forEach(section => {
        section.style.display = (section.id === sectionId) ? "flex" : "none";
    });
}