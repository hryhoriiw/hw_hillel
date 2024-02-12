//Имеется массив объектов с товарами и их ценами. Вывести в консоль список с данными по всем товарам (каждый товар на отдельной строке).
// От пользователя получить номер товара (реализовать проверку на правильность ввода номера)
//и количество (также, реализовать валидацию), вывести на страницу итоговую стоимость покупки. 
//Если стоимость превышает 10.000 рассчитать скидку в 20% и сообщить об этом пользователю.

let productNumber;
let productToBuy;

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1} ${products[i].name} ${products[i].price} - ${products[i].availability}`);
  }
}

function enterProductNumber() {
  do {
    productNumber = parseInt(prompt(`Введите номер желаемого товара`));
  } while (productNumber <= 0 || isNaN(productNumber) || productNumber > products.length);
  
  productToBuy = products[productNumber - 1];
}

let productAmount;

function enterAmountProduct() {
  do {
    productAmount = parseInt(prompt(`Введите количество желаемого товара`));
  } while (productAmount <= 0 || isNaN(productAmount) || productAmount > productToBuy.availability);
}

let price;

function calculatePrice() {
  price = productAmount * productToBuy.price;
}

let discount = 0.2;
let discountStartsFrom = 10000;

function ifDiscount() {
  let calculatePriceWithDiscount = price - price * discount;
  if (price >= discountStartsFrom) {
    console.log(`Ура, вы заслужили скидку, теперь ваша общая стоимость товаров ${calculatePriceWithDiscount} $`);
  } else {
    console.log(`К сожалению, вы не получили скидку, ваша общая стоимость товаров = ${price} $`);
  }
}

showProducts();
enterProductNumber();
enterAmountProduct();
calculatePrice();
ifDiscount();
