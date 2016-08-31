$(document).ready(function(){
  var fontArray = ['Times New Roman', 'Arial', 'Courier', 'Garamond', 'CookieMonster', 'Digitalt', 'KCFonts', 'MonaShark', 'TimeBurner', 'Trench', 'VarianeScript'];
  var selectedFont = 'Roboto';
  $('.modal-trigger').leanModal();
  var background = localStorage.getItem('background-color')
  $('html').css('background', background);
  $('#titleTxt').keyup(function(event){
    $('.bigTitle').children()[0].innerText = $(this).val();
  })
  $('.modal-trigger').click(function(){
    $('.modal-content').children('h5').remove();
    for(var i = 0; i < fontArray.length; i++){
      var h5 = document.createElement('h5');
      $(h5).css('font-family', fontArray[i]);
      h5.innerText = $('.bigTitle').children()[0].innerText
      $('.modal-content').append(h5);
    }
  })
  $('.modal-content').on('click', 'h5', function(event){
    selectedFont = $(this).css('font-family');
  })
  $('.modal-action').click(function(event){
    $('.bigTitle').children()[0].style.fontFamily = selectedFont;
  })
  $('.colorSel').on('input', function(){
    $('.bigTitle').children()[0].style.color = $(this).val();
  })
  $('.one').click(function(){
    $('.bigTitle').children()[0].style.fontSize= '2rem';
  })
  $('.two').click(function(){
    $('.bigTitle').children()[0].style.fontSize= '3.56rem';
  })
  $('.three').click(function(){
    $('.bigTitle').children()[0].style.fontSize= '4.2rem';
  })
  $('.prev').click(function(){
    localStorage.setItem('storedTitle', $('.store').get(0));
  })
  $('.next').click(function(){
    localStorage.setItem('storedTitle', $('.store').get(0));
  })
})
