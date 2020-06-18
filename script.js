

$(document).ready(function(){

var init_pos_lt="-150px";
var init_pos_rt="150px";
var door_sound=document.getElementById("door_sound");


$("body").keypress(function(event){

if(event.keyCode==13){

door_animate();

}



});



$(".container_door").click(function(){//here click function start


door_animate(2000);

});// here clikc fucntion ended



function door_animate(close_delay){

door_rt=$(".active_door_rt").eq(0);
door_lt=$(".active_door_lt").eq(0);

door_lt.delay(0).animate({left:-150})

door_rt.delay(0).animate({left:150})

door_lt.delay(close_delay).animate({left:0})

door_rt.delay(close_delay).animate({left:0})


}






});