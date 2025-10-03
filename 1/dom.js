document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("sginform1");
if (form) {
        form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("USERNAME").value.trim();
let email=document.getElementById("email").value;
    let pass = document.getElementById("PASS").value;
    let CONPASS = document.getElementById("CONPASS").value;

let emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passtest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


    if (name ==="") {
        alert("Please register your name")
        return;
    }
    if (!emailtest.test(email)) {
        alert("Invalid email format")
        
    }
if (!passtest.test(pass)) {
        alert("Password must be 8+ chars, with uppercase, lowercase and number.");
        return;
}
    if (pass !== CONPASS) {
        alert("Passwords do not match.");
        return;
    }

    funAlert.innerText="🎊🎊Signup successful!🎊🎊 ";
    funAlert.style.display="block";
    form.reset();
});
}
});