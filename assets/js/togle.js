$(document).ready(function(){       /*funcion togle al hacer click */
    $('.card-header').click(function() {           
      $(this).siblings('.card-content').toggle(); 
    });
  });


  
/* estes es el togle invertido en la clase .card-footer aplicado a la clase .card-content*/ 
$(document).ready(function(){
  $('.card-footer').click(function() {
    $(this).siblings('.card-content').toggle();
  });
});