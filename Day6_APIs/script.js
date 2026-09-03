// 1. Target the UI container element
const productGrid = document.querySelector('#productGrid');

// 2. Async function to call live public API
async function loadLiveProducts() {
  try {
    // Pipeline: JavaScript -> Fetch API -> REST API -> JSON
    const response = await fetch('https://fakestoreapi.com/products?limit=6');
    
    // Check if HTTP response status is OK (200-299)
    if (!response.ok) {
      throw new Error('Failed to download product data.');
    }

    // Parse JSON stream into JS Array/Objects
    const products = await response.json();

    // Render data dynamically into DOM using map() and innerHTML
    productGrid.innerHTML = products.map(item => `
      <div class="card">
        <h3>${item.title.slice(0, 20)}...</h3>
        <p class="price">₹${Math.round(item.price * 80)}</p>
        <p><small>Category: ${item.category}</small></p>
      </div>
    `).join('');

  } catch (error) {
    // Handle network or parsing errors on the page
    productGrid.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

// 3. Execute the API request
loadLiveProducts();