$(document).ready(function(){
  $('.modal-trigger').leanModal();
  var background = localStorage.getItem('background-color')
  $('html').css('background', background);
  $('#titleTxt').keyup(function(event){
    $('.bigTitle').children()[0].innerText = $(this).val();
  })

})
