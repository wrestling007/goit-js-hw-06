function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtnRef = document.querySelector('button');
const bgrColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

colorBtnRef.addEventListener('click', () => {
  bodyRef.style.background = getRandomHexColor();
  bgrColorRef.textContent = getRandomHexColor();
});
