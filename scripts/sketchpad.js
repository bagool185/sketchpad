red = green = blue = 255;

$(document).ready(() => {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      $('.container').append('<div class="square"></div>');
    }
    $('.container').append('<br/>');
  }
    resizeSquares();

    $('.square').hover(function() {
      /* uncomment this one for random colors
        red = Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);
      */

      /* uncomment this one to get white to black gradient
        if (red != 0) {
          red--; green--; blue--;
        } else {
          red = green = blue = 255;
        }
      */

      $(this).css({
        'background-color': 'rgb(' + red + ',' + green + ',' + blue + ')'
      })
    });
});

$(window).on('resize', () => {
  resizeSquares();
});


function resizeSquares() {
  let width = $(window).width() / 16 - 3;
  let height = $(window).height() / 16 - 3;

  $('.square').width(width).height(height);
}
