// ===============================
// AI Builder - script.js Part 2
// ===============================

// Save Project
function saveProject() {

    const prompt = document.getElementById("promptInput").value;

    localStorage.setItem("aiPrompt", prompt);

    alert("✅ Project Saved");

}

// Load Project

window.onload = () => {

    const saved = localStorage.getItem("aiPrompt");

    if(saved){

        document.getElementById("promptInput").value = saved;

    }

}

// Deploy Button

const deployButtons = document.querySelectorAll(".primary");

deployButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("🚀 Deploy feature will be connected to Vercel later.");

    });

});

// File Explorer

const files=document.querySelectorAll(".files-panel li");

files.forEach(file=>{

file.addEventListener("click",()=>{

alert(file.innerText+" opened");

});

});

// Dark Mode Toggle

let dark=true;

function toggleTheme(){

if(dark){

document.body.style.background="#ffffff";
document.body.style.color="#111827";

}else{

document.body.style.background="#0f172a";
document.body.style.color="#ffffff";

}

dark=!dark;

}

console.log("AI Builder Loaded Successfully");
