const category = document.querySelector('#categories');

const listCategory = category.children;

console.log('Number of categories:', listCategory.length);

[...listCategory].map(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.children[1].children.length);

});