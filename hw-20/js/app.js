window.addEventListener('DOMContentLoaded', showCategories);

document.getElementById('categories').addEventListener('click', event => {
  const categoryId = event.target.getAttribute('data-category');
  showProductsByCategory(categoryId);
});

document.getElementById('products').addEventListener('click', event => {
  const productId = event.target.getAttribute('data-product');
  const categoryId = event.target.getAttribute('data-category');
  
  showProductInfo(categoryId, productId);
});

document.body.addEventListener('click' , event => {
  if ( event.target.id === 'buyButton') {
    const buttonWindow = document.createElement('div');
    buttonWindow.textContent = 'Successful';
    buttonWindow.id = 'buyButtonWindow';
    buttonWindow.style.backgroundColor = 'green';

    const productParent = document.getElementById('product');
    productParent.innerHTML = '';
    productParent.appendChild(buttonWindow);

    const productsParent = document.getElementById('products');
    productsParent.innerHTML = '';
  }
})


