$(document).ready(function(){
  var background = localStorage.getItem('background-color')
  $('html').css('background', background);
  $('.store').append(localStorage.getItem('storedTitle'));
  $('.giffery').append(localStorage.getItem('giffery'));
  $('.next').click(function(){
    localStorage.setItem('message', $('textarea').val());
  })
  $('.prev').click(function(){
    localStorage.setItem('message', $('textarea').val());
  })
})