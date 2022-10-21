const category = document.querySelectorAll('.item');

console.log('Number of categories:', category.length);
console.log('');

category.forEach((elem) => {
  console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
    console.log('');
});
    

