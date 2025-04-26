const menuButton = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
const selectedText = document.getElementById('selected-text');
const selectedIcon = document.getElementById('selected-icon');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
  menuButton.classList.toggle('rotate');
});

menuList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    selectedIcon.textContent = e.target.getAttribute('data-icon');
    selectedText.textContent = e.target.getAttribute('data-text');
    menuList.classList.add('hidden');
    menuButton.classList.remove('rotate');
  }
});
  