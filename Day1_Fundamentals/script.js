const prices = [450, 1200, 899, 2500, 150];

console.log("Checking price list for high-value items...");

for (const price of prices) {
  if (price > 1000) {
    console.log(`High-value item found: ₹${price}`);
  } else {
    console.log(`Standard item: ₹${price}`);
  }
}