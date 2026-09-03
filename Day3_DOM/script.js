// 1. Select DOM elements
const form = document.querySelector('#userForm');
const nameInput = document.querySelector('#nameInput');
const greeting = document.querySelector('#greeting');

// 2. Add Event Listener for Form Submission
form.addEventListener('submit', (event) => {
  // Prevent page reload on form submit
  event.preventDefault();

  // Read input value
  const userName = nameInput.value;

  // Update DOM content dynamically
  greeting.textContent = `Hello, ${userName}! Welcome to ZoyaSofts.`;
});