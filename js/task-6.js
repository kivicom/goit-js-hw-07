function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

const controllers = {
  numberInput: controls.children[0],
  btnCreate: controls.children[1],
  btnDestroy: controls.children[2],
};

controllers.btnCreate.addEventListener("click", handleCreateBtn);
controllers.btnDestroy.addEventListener("click", handleDestroyBtn);

function createBoxes(amount) {
  let len = 30;
  const boxesElements = [];
  while (amount != 0) {
    const color = getRandomHexColor();
    const divEl = `<div style="background-color: ${color};width: ${len}px;height: ${len}px"></div>`;
    boxesElements.push(divEl);
    len += 10;
    amount += -1;
  }
  return boxesElements;
}

function handleCreateBtn(e) {
  boxes.innerHTML = "";
  const amount = Number(controllers.numberInput.value);
  controllers.numberInput.value = "";
  if (amount < 1 || amount > 100) {
    console.error("Input number must be in range from 1 to 100");
    return;
  }
  const boxesElements = createBoxes(amount);
  boxes.insertAdjacentHTML("afterbegin", boxesElements.join(""));
}

function handleDestroyBtn(e) {
  boxes.innerHTML = "";
  console.log("Cleaned");
}
