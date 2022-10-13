const fontSize = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

fontSize.addEventListener('change', event => {
    textOutput.style.fontSize = `${event.currentTarget.value}px`;
});