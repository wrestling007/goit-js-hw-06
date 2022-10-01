const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

const createElement = ingredients.map(element => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('.item');
  ingredientsEl.textContent = `${element}`;
  return ingredientsEl;

});
ingredientsEl.append(...createElement);
