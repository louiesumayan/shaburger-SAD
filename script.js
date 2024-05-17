// FOR BURGERMENU
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// FOR POPUP MODAL

function openPopup() {
  let popup = document.getElementById('popup');
  popup.classList.add('open-popup');
}

function closePopup() {
  let popup = document.getElementById('popup');
  popup.classList.remove('open-popup');
}

// CART

function orderNow() {
  alert(
    'Order Submitted! We will notify you once your order is on the way to you! xoxo, SHABURGER'
  );
}
