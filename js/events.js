function getIt(){
  return $('p').on("click", function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    if ( e.which === 71){
      alert('You have pressed the g key');
    }
  })
}

function submitIt(){
  $("form").on("submit", function(){
    alert('Your form is going to be submitted now.');
  })
}
$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
