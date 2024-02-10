/*
+0) prepare data
+1) show all products with prices
+2) show prompt with request to enter product number (validation)
+3) show prompt with request to enter product amount (validation)
+4) calculate price
+5) check if discount available
+6) if so - calculate discount
+7) then show final price

*/


// 1

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1} ${products[i].name} - $${products[i].price} - ${products[i].availability}`);
  }
}


showProducts();

// 2
let productNumber;
function enterProductNumber() {
  do {
    productNumber = parseInt(prompt('Enter product number'));
  } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
}

enterProductNumber();


// 3
const productToBuy = products[productNumber - 1];


let productAmount;
function enterAmountProduct() {
  do {
    productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
  } while(productAmount < 1 || productAmount > productToBuy.availability || isNaN(productAmount));
}

enterAmountProduct();

// 4

const price = productToBuy.price * productAmount;
const discount = 0.2;
const discountStartsFrom = 10000;

// 5
function discountProducts() {
  if (price >= discountStartsFrom) {
    // 6
    const finalPrice = price - price * discount;
    // 7
    console.log(`Congrats! You get discount. Your final price is ${finalPrice}`)
  } else {
    console.log(`The final price is ${price} $`);
  }
}

discountProducts();