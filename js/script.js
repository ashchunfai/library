// Global variables

// Selectors
const modalBtn = document.querySelector('#modal-btn');
const modal = document.querySelector('.modal');
const cancelBtn = document.querySelector('#cancel-btn');

// Event lisnters
modalBtn.addEventListener('click', () => modal.style.display = 'flex');
cancelBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
})

// Functions