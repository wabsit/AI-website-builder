// script.js

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const demoBtn = document.getElementById("demoBtn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      alert("🚀 Welcome to AI Website Builder!\nLet's start building your project.");
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      const demo = document.getElementById("demo");
      if (demo) {
        demo.scrollIntoView({
          behavior: "smooth"
        });
      } else {
        alert("Demo section coming soon!");
      }
    });
  });
});
// ===============================
// AI Builder - script.js Part 1
// ===============================

// Buttons
const startBtn = document.getElementById("startBtn");
const demoBtn = document.getElementById("demoBtn");
const generateBtn = document.getElementById("generateBtn");

const promptInput = document.getElementById("promptInput");
const chatBox = document.querySelector(".chat-box");
const previewFrame = document.getElementById("previewFrame");

// Start Button
if (startBtn) {
    startBtn.onclick = () => {
        document.querySelector(".workspace").scrollIntoView({
            behavior: "smooth"
        });
    };
}

// Demo Button
if (demoBtn) {
    demoBtn.onclick = () => {
        alert("🚀 AI Builder Demo Coming Soon!");
    };
}

// Generate Button
if (generateBtn) {

    generateBtn.onclick = () => {

        const prompt = promptInput.value.trim();

        if (!prompt) {
            alert("Please enter your prompt.");
            return;
        }

        // User Message
        chatBox.innerHTML += `
            <div class="user-message">
                ${prompt}
            </div>
        `;

        // AI Loading
        chatBox.innerHTML += `
            <div class="ai-message">
                🤖 Generating Website...
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

        // Fake Preview (बाद में Groq API से बदलेंगे)
        setTimeout(() => {

            previewFrame.srcdoc = `
            <html>
            <body style="
                background:#111827;
                color:white;
                font-family:Arial;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            ">
            <div>
            <h1>🚀 Website Generated</h1>
            <p>${prompt}</p>
            </div>
            </body>
            </html>
            `;

        },1500);

    };

              }
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

const files
