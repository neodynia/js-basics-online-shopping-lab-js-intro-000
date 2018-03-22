var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {};
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random()*(100));
  cart.push(newItem);
  return `${item} has been added to your cart.`;

 //create new object for item
 //give key-value pair of itemName: name of item
 //give key-value pair of itemPrice: price of item
 //random generated, 1<int<100
 //return 'itemName has been added to your car.' after item is added
}

function viewCart() {
  // write your code here
  let newArray = [];
  let newArrayEnd = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
      return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + '.';
    }  else if (cart.length === 2) {
      return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + ', and ' + cart[1].itemName + ' at $' + cart[1].itemPrice + '.';
    } else {
      for (var i = 0; i < cart.length - 1; i++) {
          newArray.push(cart[i].itemName);
          newArray.push('at $' + cart[i].itemPrice + ',');
      }
      return 'In your cart, you have ' + newArray.join(' ') + ' and ' + cart[cart.length -1].itemName + ' at $' + cart[cart.length - 1].itemPrice +'.';
    }
  }


function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
