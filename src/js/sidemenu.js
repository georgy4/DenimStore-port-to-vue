'use strict'

let hamburgerButton = document.querySelector('.hamburger');
let sideMenu = document.querySelector('.header-top-navigation__list');
let modalField = document.querySelector('.modal');

hamburgerButton.addEventListener('click', function(){
  sideMenu.classList.remove('header-top-navigation__list--hidden');
  modalField.style.display = 'block';
});

modalField.addEventListener('click', function(){
  modalField.style.display = 'none';
  sideMenu.classList.add('header-top-navigation__list--hidden');
});