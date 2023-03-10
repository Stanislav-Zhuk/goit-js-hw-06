// Завдання 1
// HTML містить список категорій ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// Варіант #1

// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach(item => {
//   const categoryTitle = item.querySelector('h2').textContent;
//   const categoryElements = item.querySelectorAll('li').length;
//   console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}`);
// });

// Варіант #2

// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.children;

// console.log(`Number of categories: ${categoriesItems.length}`);

// for (const item of categoriesItems) {
//   const categoryTitle = item.children[0].textContent;
//   const categoryElements = item.children[1].children.length;

//   console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}`);
// }

// Варіант #3

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.children[0].textContent;
  const categoryElements = item.children[1].children.length;
  console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}`);
});