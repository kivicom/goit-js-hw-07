function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const widgetSpan = document.querySelector(".color");
changeColorBtn.addEventListener("click", handleClickChgColor);

function handleClickChgColor(e) {
  const color = getRandomHexColor();
  widgetSpan.textContent = color;
  body.style.backgroundColor = color;
}
