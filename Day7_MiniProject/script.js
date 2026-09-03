const form = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const statusMessage = document.querySelector('#statusMessage');
const resultsContainer = document.querySelector('#resultsContainer');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    statusMessage.textContent = 'Please enter a search term.';
    statusMessage.className = 'status error';
    return;
  }

  // 1. Loading State
  statusMessage.textContent = 'Searching items...';
  statusMessage.className = 'status';
  resultsContainer.innerHTML = '';

  try {
    // 2. Fetch API using async/await and try/catch error handling
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Failed to retrieve products from server.');

    const data = await response.json();

    // 3. Process API data using at least 2 array methods (filter and map)
    const filteredProducts = data.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );

    // 4. Handle empty/no results state
    if (filteredProducts.length === 0) {
      statusMessage.textContent = `No products found matching "${query}".`;
      statusMessage.className = 'status error';
      return;
    }

    statusMessage.textContent = `Found ${filteredProducts.length} matching product(s):`;

    // 5. Dynamic Rendering using map() and template literals
    resultsContainer.innerHTML = filteredProducts.map(item => `
      <div class="card">
        <h3>${item.title}</h3>
        <p><strong>Category:</strong> ${item.category}</p>
        <p class="price">₹${Math.round(item.price * 80)}</p>
      </div>
    `).join('');

  } catch (error) {
    // 6. Error State Handling
    statusMessage.textContent = `Error: ${error.message}`;
    statusMessage.className = 'status error';
  }
});