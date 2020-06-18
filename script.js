

$(document).ready(function(){

var init_pos_lt="-150px";
var init_pos_rt="150px";

$(".container_door").click(function(){//here click function start
door_anim();
setInterval(door_anim,1000);

});


function door_anim(){


$(".active_door_lt").delay(0).animate({left:-150}).delay(1000).animate({left:0},1000);
$(".active_door_rt").delay(0).animate({left:150}).delay(1000).animate({left:0},1000);


}


});
