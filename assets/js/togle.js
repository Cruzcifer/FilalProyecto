$(document).ready(function(){       
    $('.card-header').click(function() {            /*funcion  al hacer click */
      $(this).siblings('.card-content').toggle();  /* llama a la funcion toggle */
    });
  });


  
/* estes es el togle invertido en la clase .card-footer aplicado a la clase .card-content*/ 
$(document).ready(function(){
  $('.card-footer').click(function() {
    $(this).siblings('.card-content').toggle();
  });
});