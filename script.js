$(document).ready(function () {
  $('body').css('width', '100%');
  $('body').css('height', '100vh');

  $('h2').css('position', 'relative');
  $('h2').css('padding-bottom', '10px');
  $('h2').css('margin-bottom', '10px');

  $('.btn').css('width', '100%');
  $('.btn').css('padding', '0.5rem 1rem');
  $('.btn').css('font-size', '1.1rem');
  $('.btn').css('background-color', ' green');
  $('.btn').css('cursor', 'pointer');
  $('.btn').css('outline', 'none');
  $('.btn').css('border', 'none');
  $('.btn').css('color', '#fff');
  $('.btn').css('transition', '0.3s');
  $('.btn').mouseenter(function () {
    $(this).css('background-color', 'lime');
  });
  $('.btn').mouseleave(function () {
    $(this).css('background-color', 'green');
  });
});
