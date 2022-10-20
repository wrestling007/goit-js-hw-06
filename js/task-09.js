function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtnRef = document.querySelector('button');
const bgrColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');
const randomColor = getRandomHexColor;

colorBtnRef.addEventListener('click', () => {
  bodyRef.style.background = randomColor();
  bgrColorRef.textContent = randomColor();
});


