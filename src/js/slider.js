// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });

var tooltipSlider = document.getElementById('slider-tooltips');

noUiSlider.create(tooltipSlider, {
    start: [500, 3500],
    connect: true,
    tooltips: [
      wNumb({
        decimals: 0, 
        prefix: '$ '
      }),
      wNumb({
        decimals: 1, 
        prefix: '$ ',
        thousand: '.'
      })],
    range: {
        'min': 0,
        'max': 4000
    }
});