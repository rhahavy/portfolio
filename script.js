console.log("Hello from your script.js file!");
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
