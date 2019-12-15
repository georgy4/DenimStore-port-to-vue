'use strict'

let categoryTop = document.querySelector('.category-section').getBoundingClientRect().top;

document.querySelector('.to-bottom').addEventListener('click', function(){
  window.scrollTo(0, categoryTop - 70);
});
