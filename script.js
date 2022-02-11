$(document).ready(function(){

// Variables
 $surface = $('.surface');
 $car = $('.car');
 $img = $('.car img');
 let flag = true; 
  
 const cars = ['./assets/Img_05.png','./assets/Img_06.png'];   

// Keypress event
 $(document).on('keypress', function(e){
     // This is how you can find the key code: cosnole.log(e.which);
     if (e.which == 13){
      $($surface).toggleClass('moveRight');
      $($car).toggleClass('suspension');
     }
 })

 //lights
 $(document).on('keypress', function(e){
 if(e.which== 119){
 if(flag){
 flag=false
     $img.attr('src', cars[0]);
 }else {
 flag=true;
     $img.attr('src', cars[1]);

 }
 }


})

});    
