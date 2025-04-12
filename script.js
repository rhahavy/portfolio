console.log("Hello from your script.js file!");
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.createElement("p");
  greeting.textContent = "🌟 Thanks for visiting!";
  document.body.appendChild(greeting);
});
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#E6E6FA', '#D8A7B1', '#C1B2D3']
    });
  });
});
