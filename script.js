document.getElementById("generateBtn").addEventListener("click", function () {
  const prompt = document.getElementById("prompt").value;
  const preview = document.getElementById("previewFrame");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body{
          font-family:Arial,sans-serif;
          padding:40px;
          text-align:center;
          background:#f5f5f5;
        }
        h1{
          color:#2563eb;
        }
      </style>
    </head>
    <body>
      <h1>AI Generated Website</h1>
      <p>${prompt}</p>
    </body>
    </html>
  `;

  preview.srcdoc = html;
});
// ===============================
// AI Builder - script.js
// ===============================

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
    alert("🚀 AI Builder Demo");
  };
}

// Generate Website
if (generateBtn) {
  generateBtn.onclick = () => {

    const prompt = promptInput.value.trim();

    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    // User Message
    chatBox.innerHTML += `
      <div class="user-message">
        👤 ${prompt}
      </div>
    `;

    // AI Loading
    chatBox.innerHTML += `
      <div class="ai-message">
        🤖 Generating website...
      </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {

      const html = `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
      body{
      font-family:Arial;
      background:#0f172a;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      margin:0;
      }
      h1{
      color:#3b82f6;
      }
      </style>
      </head>

      <body>

      <div>

      <h1>🚀 AI Generated Website</h1>

      <p>${prompt}</p>

      </div>

      </body>

      </html>
      `;

      previewFrame.srcdoc = html;

      chatBox.innerHTML += `
      <div class="ai-message">
      ✅ Website Generated Successfully.
      </div>
      `;

      chatBox.scrollTop = chatBox.scrollHeight;

    },1500);

  };
}

// Save Project
function saveProject(){

localStorage.setItem(
"projectPrompt",
promptInput.value
);

alert("Project Saved");

}

// Load Project

window.onload=()=>{

const data=
localStorage.getItem("projectPrompt");

if(data){

promptInput.value=data;

}

};

// Theme

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

// File Explorer

document.querySelectorAll(".files-panel li")
.forEach(file=>{

file.onclick=()=>{

alert(file.innerText);

};

});

console.log("AI Builder Ready");
