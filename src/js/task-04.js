const counterValue = document.querySelector('#value');
let count = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  count += 1;
  counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count -= 1;
  counterValue.textContent = count;
});