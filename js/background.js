$(document).ready(function(){
  $('.colors').children().each(function(event){
    $(this).css('background-color', $(this).attr('class'));
  })
  $('.colors').on('click', 'div', function(event){
    $('html').css('background',$(this).css('background-color'));
  })
  $('.patterns').on('click', 'img', function(event){
    $('html').css('background', `url(${$(this).attr('src')}) repeat`)
    console.log($('html').css('background'));
  })
  $('.rightarr').click(function(){
    localStorage.setItem('background-color', $('html').css('background'));
  })
})
