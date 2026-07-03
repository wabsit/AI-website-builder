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
