const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.className = 'item';
  ingredientsArray.push(item);
}
);

console.log(ingredientsArray);
console.log(...ingredientsArray);

ingredientsList.append(...ingredientsArray);
