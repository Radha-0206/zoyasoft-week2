// 1. Array of 5 product objects
const products = [
  { name: 'Laptop', price: 55000, category: 'Electronics' },
  { name: 'Mouse', price: 800, category: 'Electronics' },
  { name: 'Notebook', price: 120, category: 'Stationery' },
  { name: 'Backpack', price: 1500, category: 'Accessories' },
  { name: 'Headphones', price: 2200, category: 'Electronics' }
];

// 2. Arrow function to calculate total price
const calculateTotal = (items) => {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
};

// 3. Object Destructuring
const { name, price } = products[0];

// 4. Console Logs
console.log(`First product: ${name} costs ₹${price}`);
console.log(`Total price of all products: ₹${calculateTotal(products)}`);