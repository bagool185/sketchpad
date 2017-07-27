red = green = blue = 255;

grid = 16;

gradientToggled = true;

$(document).ready(() => {
  buildSquares();

  $('button').on('click', function() {
    let text = $(this).text();

    text = (text == "Toggle gradient") ? "Toggle random colors" : "Toggle gradient";

    $(this).text(text);

    gradientToggled = (text == "Toggle gradient") ? false : true;

    $('.square').css({'background-color': 'white'});
  });

  $('#size').change(function() {
    grid = $(this).val();

    if (grid < 1 || grid > 50) {
      $('.error').text("You shouldn't enter a value that's not 1 or 50")
                 .fadeToggle(200);

      $('.error').delay(1000)
                 .fadeToggle(3000);
    } else {
      $('.square').remove();
      buildSquares();
    }
  });
});

function buildSquares() {

  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      $('.container').append('<div class="square"></div>');
    }
  }

  $('.square').hover(function() {
    if (gradientToggled === true) {
      if (red != 0) {
        red--; green--; blue--;
      } else {
        red = green = blue = 255;
      }
    } else {
      red = Math.floor(Math.random() * 255);
      green = Math.floor(Math.random() * 255);
      blue = Math.floor(Math.random() * 255);
    }

    $(this).css({
      'transition': 'background-color 1s ease-out',
      'background-color': 'rgb(' + red + ',' + green + ',' + blue + ')'
    }, 'slow');
  });

  let width = 500 / grid;
  let height = 500 / grid;

  $('.square').width(width).height(height);
}
