function showCategories() {
  const parent = document.getElementById('categories');

  data.forEach(category => {
    const myCategoryElement = document.createElement('div');
    myCategoryElement.textContent = category.name;
    myCategoryElement.setAttribute('data-category', category.key);

    parent.appendChild(myCategoryElement);
  });
}

function showProductsByCategory(categoryId) {
  const selectedCategory = data.find(category => category.key === categoryId);

  const parent = document.getElementById('products');
  parent.innerHTML = '';

  selectedCategory.products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = product.name;
    productElement.setAttribute('data-product', product.id);
    productElement.setAttribute('data-category', categoryId);

    parent.appendChild(productElement);
  });
}

function showProductInfo(categoryId, productId) {
  const selectedCategory = data.find(category => category.key === categoryId);
  const selectedProduct = selectedCategory.products.find(product => product.id == productId);

  const parent = document.getElementById('product');
  parent.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <p>Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;

  const buyButton = document.createElement('input');
  buyButton.setAttribute('type', 'button');
  buyButton.setAttribute('value', 'Buy');
  buyButton.setAttribute('id', 'buyButton');

  parent.appendChild(buyButton);
}

function tableAfterBuy () {
  const table = document.createElement('table');
  const rows = [
    ['ПІБ покупця', '<input type="text" id="pib" required>'],
    ['Місто', '<select id="city" required><option value="city1">Місто 1</option><option value="city2">Місто 2</option></select>'],
    ['Склад Нової пошти', '<input type="text" id="postOffice" required>'],
    ['Післяплати або оплати банківської картки', '<input type="radio" id="paymentTypeCash" name="paymentType" value="cash" required><label for="paymentTypeCash">Готівка</label><input type="radio" id="paymentTypeCard" name="paymentType" value="card" required><label for="paymentTypeCard">Картка</label>'],
    ['Кількість продукції, що купується', '<input type="number" id="quantity" required>'],
    ['Коментар до замовлення', '<textarea id="comment" required></textarea>']
  ];


  rows.forEach(rowData => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = rowData[0];
    cell2.innerHTML = rowData[1];

  });

  const submitBut = document.createElement('input');
  submitBut.setAttribute('type','button');
  submitBut.setAttribute('value' , 'Submit');
  submitBut.addEventListener('click' , submitForm);

  const submitRow = table.insertRow();
  const submitCell = submitRow.insertCell(0);
  submitCell.colSpan = 2;
  submitCell.appendChild(submitBut);

  const productParent = document.getElementById('product');
  productParent.innerHTML = '';
  productParent.appendChild(table);

}

function applyStylesToWindow(windowElement) {
  windowElement.style.position = 'absolute';
  windowElement.style.left = '50%';
  windowElement.style.top = '50%';
  windowElement.style.transform = 'translate(-50%, -50%)';
  windowElement.style.textAlign = 'center';
}

function submitForm() {
  const pibInput = document.getElementById('pib').value;
  const cityInput = document.getElementById('city').value;
  const npInput = document.getElementById('postOffice').value;
  const payInput = document.getElementById('paymentTypeCash').checked;
  const quantityProductInput = document.getElementById('quantity').value;
  const commentInput = document.getElementById('comment').value;

  const productParent = document.getElementById('product');
  productParent.innerHTML = '';

  if (!pibInput || !cityInput || !npInput || !payInput || !quantityProductInput) {
    const buttonErrorWindow = document.createElement('div');
    buttonErrorWindow.textContent = 'Error';
    buttonErrorWindow.id = 'errorButtonWindow';
    buttonErrorWindow.style.padding = '50px';
    buttonErrorWindow.style.backgroundColor = 'red';
    applyStylesToWindow(buttonErrorWindow);

    productParent.appendChild(buttonErrorWindow);
  } else {
    const buttonWindow = document.createElement('div');
    buttonWindow.textContent = 'Successful';
    buttonWindow.id = 'successButtonWindow';
    buttonWindow.style.backgroundColor = 'green';
    buttonWindow.style.padding = '50px';
    applyStylesToWindow(buttonWindow);

    productParent.appendChild(buttonWindow);

    displayOrderInfo(pibInput, cityInput, npInput, payInput, quantityProductInput, commentInput);
  }
}

function displayOrderInfo(pib, city, postOffice, paymentType, quantity, comment) {
  const orderInfo = document.createElement('div');
  orderInfo.innerHTML = `
    <h3>Інформація про замовлення:</h3>
    <p><strong>ПІБ покупця:</strong> ${pib}</p>
    <p><strong>Місто:</strong> ${city}</p>
    <p><strong>Склад Нової пошти:</strong> ${postOffice}</p>
    <p><strong>Спосіб оплати:</strong> ${paymentType ? 'Готівка' : 'Картка'}</p>
    <p><strong>Кількість продукції:</strong> ${quantity}</p>
    <p><strong>Коментар до замовлення:</strong> ${comment}</p>
  `;

  const orderInfoContainer = document.getElementById('orderInfo');
  orderInfoContainer.innerHTML = '';
  orderInfoContainer.appendChild(orderInfo);
}


