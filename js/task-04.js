const addCounterBtn = document.querySelector('[data-action="increment"]');
const removeCounterBtn = document.querySelector('[data-action="decrement"]');
const windowValue = document.querySelector("#value");

let counterValue = 0

addCounterBtn.addEventListener("click", () => {
    counterValue += 1;
    windowValue.textContent = `${counterValue}`;
  });

removeCounterBtn.addEventListener("click", () => {
  counterValue -= 1;
    windowValue.textContent = `${counterValue}`;
});