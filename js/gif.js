$(document).ready(function(){
  var gifArr = [];
  $('html').css('background', localStorage.getItem('background-color'));
  $('.store').append(localStorage.getItem('storedTitle'));
  $('.btn').click(function(event){
    event.preventDefault();
    if($('#gifSearch').val() === ''){
      Materialize.toast('You left the search field blank!', 4000);
    }else{
      $('.popGIF').html('');
      var input = $('#gifSearch').val();
      gifArr = [];
      $.ajax({
        method:'GET',
        url:`https://api.riffsy.com/v1/search?tag=${input}`,
        dataType: 'json',
        success: function(data){
          $('.popGIF').innerHTML = '';
          var giffies = data.results;
          for(var i = 0; i < giffies.length; i++){
            let url = giffies[i].url;
            gifArr.push(url);
          }
          fillGIF();
        },
        error: function(err){
          console.log('SHMERROR', err);
        }
      })
    }
  })
  function fillGIF(){
    for(var i = 0; i < gifArr.length; i++){
      var childElem = document.createElement('img');
      childElem.src = gifArr[i];
      $('.popGIF').append(childElem);
    }
  }
  $('.popGIF').on('click','img', function(){
    var img = document.createElement('img');
    img.src = this.src;
    $('.giffage').append(img);
  })
  $('.next').click(function(){
    localStorage.setItem('giffery', $('.giffery').html())
  })
  $('.prev').click(function(){
    localStorage.setItem('giffery', $('.giffery').html())
  })
});
