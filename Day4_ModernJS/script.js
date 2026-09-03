// 1. Data Source (Array of product objects)
const products = [
  { name: 'Laptop', price: 55000, category: 'Electronics' },
  { name: 'Mouse', price: 800, category: 'Electronics' },
  { name: 'Notebook', price: 120, category: 'Stationery' },
  { name: 'Backpack', price: 1500, category: 'Accessories' },
  { name: 'Headphones', price: 2200, category: 'Electronics' }
];

// 2. filter(): Keep only products under ₹1,000
const affordableProducts = products.filter(item => item.price < 1000);

// 3. map(): Transform array to get only product names
const productNames = products.map(item => item.name);

// 4. reduce(): Collapse array into a single grand total value
const grandTotal = products.reduce((accumulator, item) => accumulator + item.price, 0);

// 5. Output results to Console using Template Literals
console.log('--- Modern JS Array Methods ---');
console.log('Products under ₹1,000 (filter):', affordableProducts);
console.log('Product Names List (map):', productNames);
console.log(`Grand Total Price (reduce): ₹${grandTotal}`);