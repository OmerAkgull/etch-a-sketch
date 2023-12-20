const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

function hoverEffect(event) {
  event.target.style.background = "black";
}

for (box of grids) {
  box.addEventListener("mouseover", hoverEffect);
}
