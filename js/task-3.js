const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", handleInput);

function handleInput(e) {
  if (
    nameInput.value.length === 0 ||
    nameInput.value.split(" ").join("").length === 0
  ) {
    nameOutput.textContent = "Anonymous";
    return;
  }
  nameOutput.textContent = nameInput.value.trim();
}
