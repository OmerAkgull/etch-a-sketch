const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

function hoverEffect() {
  for (grid of grids) {
    grid.style.background = "gray";
  }
}

for (grid of grids) {
  grid.addEventListener("mouseover", hoverEffect);
}
