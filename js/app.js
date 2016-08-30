$(document).ready(function(){
  var gifArr = [];
  $('.modal-trigger').leanModal();
  $('.modal-trigger').click(function(event){
    if($('.currentMsg').innerHTML = ''){
      $('.gifstuff')[0].innerHTML = '';
      $('.apisearch')[0].value = '';
    }
  })
  $('.querify').click(function(event){
    event.preventDefault();
    if($('.apisearch')[0].value === ''){
       Materialize.toast('The search field is empty.', 4000);
    }else{
      $('.gifstuff')[0].innerHTML = '';
      gifArr = [];
      var input = $('.apisearch')[0].value;
      $.ajax({
        method:'GET',
        url:`https://api.riffsy.com/v1/search?tag=${input}`,
        dataType: 'json',
        success: function(data){
          $('.gifstuff')[0].innerHTML = '';
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
    var element = $('.gifstuff')[0];
    for(var i = 0; i < gifArr.length; i++){
      var childElem = document.createElement('img');
      childElem.src = gifArr[i];
      element.appendChild(childElem);
    }
  }
  $('.gifstuff').on('click', 'img', function(){
    var img = document.createElement('img');
    img.src = this.src;
    $('.currentMsg').append(img);
    console.log('sup');
  })
  $('.modal-action').click(function(){
    $('.gifDiv').prepend($('.currentMsg').html());
  })
})
