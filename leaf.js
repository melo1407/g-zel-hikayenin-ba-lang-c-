document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 25; i++) {
    let leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = 6 + Math.random() * 5 + "s";
    leaf.style.opacity = Math.random();
    leaf.style.fontSize = Math.random() * 20 + 16 + "px";
    leaf.innerText = "🌸";
    document.body.appendChild(leaf);
  }
});