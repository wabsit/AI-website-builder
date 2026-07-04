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
// ===================================
// AI Builder - script.js Part 2
// ===================================

// Chat Animation
function addAIMessage(message){

  const msg = document.createElement("div");
  msg.className = "ai-message";
  msg.innerHTML = message;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fake AI Response
function generateAI(){

  const prompt = promptInput.value.trim();

  if(prompt===""){
    alert("Enter your prompt.");
    return;
  }

  addAIMessage("🤖 Thinking...");

  setTimeout(()=>{

    addAIMessage("✅ Project Generated Successfully.");

    previewFrame.srcdoc=`

    <!DOCTYPE html>

    <html>

    <head>

    <style>

    body{

    font-family:Arial;

    background:#111827;

    color:white;

    display:flex;

    justify-content:center;

    align-items:center;

    height:100vh;

    }

    h1{

    color:#3b82f6;

    }

    </style>

    </head>

    <body>

    <div>

    <h1>AI Website Builder</h1>

    <p>${prompt}</p>

    </div>

    </body>

    </html>

    `;

  },2000);

}

if(generateBtn){
  generateBtn.addEventListener("click",generateAI);
}

// Project Actions
document.querySelectorAll(".project-list li").forEach(project=>{

project.onclick=()=>{

alert("Opening: "+project.innerText);

};

});

// Dashboard Buttons
document.querySelectorAll(".btn").forEach(btn=>{

btn.onclick=()=>{

console.log(btn.innerText);

};

});

// Loading Animation
window.addEventListener("load",()=>{

console.log("AI Builder Loaded");

});

// Future API Function
async function callAI(prompt){

// Groq API yahan connect hoga.

console.log("Prompt:",prompt);

}
// =====================================
// AI Builder - script.js Part 3
// =====================================

// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.innerHTML = "🌙 Dark";
        } else {
            themeBtn.innerHTML = "☀ Light";
        }

    });

}

// Download Project

function downloadProject() {

    const html = document.documentElement.outerHTML;

    const blob = new Blob([html], {
        type: "text/html"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "AI-Website.html";

    a.click();

    URL.revokeObjectURL(url);

}

// Keyboard Shortcut

document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key === "s") {

        e.preventDefault();

        saveProject();

    }

});

// Auto Save

setInterval(() => {

    if (promptInput) {

        localStorage.setItem(
            "projectPrompt",
            promptInput.value
        );

    }

}, 5000);

// Notification

function notify(text) {

    const box = document.createElement("div");

    box.innerText = text;

    box.style.position = "fixed";
    box.style.right = "20px";
    box.style.bottom = "20px";
    box.style.background = "#2563eb";
    box.style.color = "#fff";
    box.style.padding = "12px 20px";
    box.style.borderRadius = "10px";
    box.style.zIndex = "9999";

    document.body.appendChild(box);

    setTimeout(() => {

        box.remove();

    }, 2500);

}

// Buttons

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", () => {

        notify(btn.innerText + " Clicked");

    });

});

// Fake Deploy

function deployProject() {

    notify("🚀 Deploying Project...");

    setTimeout(() => {

        notify("✅ Deploy Complete");

    }, 3000);

}

console.log("AI Builder Script Part 3 Loaded");
// ====================================
// AI Website Builder - Part 1
// ====================================

// Elements
const startBtn = document.getElementById("startBtn");
const demoBtn = document.getElementById("demoBtn");
const generateBtn = document.getElementById("generateBtn");
const promptInput = document.getElementById("promptInput");
const chatBox = document.querySelector(".chat-box");
const previewFrame = document.getElementById("previewFrame");
const themeToggle = document.getElementById("themeToggle");

// Start Button
if (startBtn) {
  startBtn.addEventListener("click", () => {
    const workspace = document.querySelector(".workspace");
    if (workspace) {
      workspace.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

// Demo Button
if (demoBtn) {
  demoBtn.addEventListener("click", () => {
    alert("Welcome to AI Website Builder Demo!");
    // ====================================
// AI Website Builder - Part 2
// Theme Toggle + AI Chat
// ====================================

// Theme Toggle
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// Add AI Message
function addAIMessage(message) {
    if (!chatBox) return;

    chatBox.innerHTML += `
        <div class="ai-message">
            🤖 ${message}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Add User Message
function addUserMessage(message) {
    if (!chatBox) return;

    chatBox.innerHTML += `
        <div class="user-message">
            👤 ${message}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}
  });
}
// ====================================
// AI Website Builder - Part 3
// Generate Website + API Call
// ====================================

async function generateWebsite() {

    const prompt = promptInput.value.trim();

    if (!prompt) {
        alert("Please enter your website idea.");
        return;
    }

    addUserMessage(prompt);
    addAIMessage("Generating your website...");

    try {

        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {

            const html = data.choices[0].message.content;

            if (previewFrame) {
                previewFrame.srcdoc = html;
            }

            addAIMessage("✅ Website Generated Successfully!");

        } else {

            addAIMessage
// ====================================
// AI Website Builder - Part 4
// File Explorer + Download + Deploy
// ====================================

// Open Project
function openProject() {
    alert("📂 Project Opened Successfully!");
}

// Save Project
function saveProject() {
    alert("💾 Project Saved Successfully!");
}

// Download Project
function downloadProject() {

    const html = previewFrame ? previewFrame.srcdoc : "";

    const blob = new Blob([html], {
        type: "text/html"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();

    URL.revokeObjectURL(url);

    addAIMessage("📥 Project Downloaded!");
}

// Deploy Project
function deployProject() {

    addAIMessage("🚀 Deploying Project...");

    setTimeout(() => {
        addAIMessage("✅ Project Ready for Vercel Deployment!");
    }, 2000);

}

// Button Events
const openBtn = document.getElementById("openBtn");
const saveBtn = document.getElementById("saveBtn");
const downloadBtn = document.getElementById("downloadBtn");
const deployBtn = document.getElementById("deployBtn");

if (openBtn) openBtn.addEventListener("click", openProject);
if (saveBtn) saveBtn.addEventListener("click", saveProject);
if (downloadBtn) downloadBtn.addEventListener("click", downloadProject);
if (deployBtn) deployBtn.addEventListener("click", deployProject);   
          // ====================================
// AI Website Builder - Part 5
// Theme + Notifications + Loading
// ====================================

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const mode = document.body.classList.contains("dark-mode")
        ? "🌙 Dark Mode Enabled"
        : "☀ Light Mode Enabled";

    showNotification(mode);
}

if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}

// Notification
function showNotification(message) {

    const notification = document.createElement("div");

    notification.className = "notification";
    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 3000);

}

// Loading Animation
function showLoading() {

    if (previewFrame) {

        previewFrame.srcdoc = `
        <html>
        <body style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            font-family:Arial;
            background:#0f172a;
            color:white;">
            <h2>🤖 AI is Generating Website...</h2>
        </body>
        </html>
        `;

    }

        }
          // =====================================
// AI Website Builder - Part 6
// GitHub + Vercel + Download
// =====================================

// Download Project
function downloadProject() {

    const html = previewFrame ? previewFrame.srcdoc : "";

    const blob = new Blob([html], {
        type: "text/html"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "index.html";
    link.click();

    URL.revokeObjectURL(url);

    addAIMessage("📥 Project Downloaded Successfully!");

}

// Push to GitHub
function pushToGitHub() {

    addAIMessage("☁️ Connecting to GitHub...");

    setTimeout(() => {

        addAIMessage("✅ Project Ready to Push!");

    }, 2000);

}

// Deploy to Vercel
function deployToVercel() {

    addAIMessage("🚀 Deploying to Vercel...");

    setTimeout(() => {

        addAIMessage("✅ Deployment Completed!");

    }, 3000);

}

// Button Events
const githubBtn = document.getElementById("github
                                          
// =====================================
// AI Website Builder - Part 7
// Auto Save + Chat History + Live Preview
// =====================================

// Auto Save Prompt
function autoSavePrompt() {

    if (!promptInput) return;

    localStorage.setItem(
        "ai_prompt",
        promptInput.value
    );

}

// Load Saved Prompt
function loadSavedPrompt() {

    if (!promptInput) return;

    const saved = localStorage.getItem("ai_prompt");

    if (saved) {
        promptInput.value = saved;
    }

}

//
      // =====================================
// AI Website Builder - Part 8 (Final)
// Export + Reset + Final Setup
// =====================================

// Export HTML
function exportHTML() {

    if (!previewFrame || !previewFrame.srcdoc) {
        alert("No website generated yet.");
        return;
    }

    const blob = new Blob([previewFrame.srcdoc], {
        type: "text/html"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();

    URL.revokeObjectURL(url);

    addAIMessage("✅ HTML Exported Successfully!");

}

// Reset Builder
function resetBuilder() {

    if (promptInput) promptInput.value = "";

    if (previewFrame) {
        previewFrame.srcdoc = "";
    }

    if (chatBox) {
        chatBox.innerHTML = "";
    }

    localStorage.removeItem("ai_prompt");

    addAIMessage("🔄 Builder Reset Complete");

}

// Export Button
const exportBtn = document.getElementById("exportBtn");

if (exportBtn) {
    exportBtn.addEventListener("click", exportHTML);
}

// Reset Button
const resetBtn = document.getElementById("resetBtn");

if (resetBtn) {
    resetBtn.addEventListener("click", resetBuilder);
}

// Startup
window.addEventListener("load", () => {

    console.log("🚀 AI Website Builder Ready");

    if (promptInput) {
        promptInput.focus();
    }

});
