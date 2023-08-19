const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = [];
 ingredients.forEach((ingredient)=>{
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('.item');
  ingredientsEl.push(itemEl);
})

document.querySelector('#ingredients').append(...ingredientsEl);


