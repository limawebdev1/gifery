$(document).ready(function(){
  $('.rightarr').click(function(event){
    event.preventDefault();
    var inputs = $('#first_name');
    var isBlank = false;
    for(var i = 0; i < inputs.length; i++){
      if (inputs[i].value === ''){
        isBlank = true;
        break;
      }
    }
    if(isBlank === true){
      Materialize.toast('You left a field empty!', 4000);
    }else{
      localStorage.setItem('to', $('.tos').val());
      localStorage.setItem('from', $('.froms').val());
      window.location.assign("background.html");
    }
  })
})
