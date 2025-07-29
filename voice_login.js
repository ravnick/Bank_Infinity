let voices = [];

// Load voices asynchronously
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
};
let correctUPIPin = "";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const gender = document.getElementById("gender").value;
    const pin = document.getElementById("pin").value.trim();

    if (name === "" || gender === "" || pin.length !== 4 || isNaN(pin)) {
        showAlert("Please fill all fields correctly");
        return;
    }
    correctUPIPin = pin; // ✅ UPI Pin yahin set karo
    // Voice Greeting
    // gender.toLowerCase()  ✅  IMP   
    let greet = gender.toLowerCase() === "female"
        ? `Welcome to Infinity Bank, Ms. ${name}`
        : `Welcome to Infinity Bank, Mr. ${name}`;
    
    if (name.toLowerCase() === "nikhil" && gender.toLowerCase() === "male" && pin === "1111") {
        greet = "Hi Nikhil bro how are you? kaisee ho tumm";
    }
     if (name.toLowerCase() === "nikhil" && gender.toLowerCase() === "male" && pin === "2222") {
        greet = "Hi Nikhil bro how are you? kaisi hai anjali bhabhi";
    }
     if (name.toLowerCase() === "nikhil" && gender.toLowerCase() === "male" && pin === "3333") {
        greet = "Hi Nikhil bro how are you? kaisii hai apni web site";
    }
     if (name.toLowerCase() === "nikhil" && gender.toLowerCase() === "male" && pin === "4444") {
        greet = "Nikhil bro 4444 pin kyu dala yaha to kuch bhi nahi hai";
    }

    const speak = new SpeechSynthesisUtterance(greet);
    speak.lang = "en-US";
    speak.pitch = 1;
    speak.rate = 0.85;
    speak.volume = 1;

    // ✅ Always use female voice (regardless of user gender)
    if (voices.length > 0) {
        speak.voice = voices.find(v => v.name.includes("Female") || v.name.includes("Google UK English Female")) || voices[0];
    }

    window.speechSynthesis.speak(speak);

    // Hide login, show main
    document.querySelector(".parent-login").style.display = "none";
    document.querySelector(".container").style.display = "flex";
});


