const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');

function toggleMenu() {
  menu.classList.toggle('open');
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
document.body.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
    menu.classList.remove('open');
  }
});
