

$(document).ready(function(){

var open_width=300;
var audio_obj=document.getElementById("door_sound");
$(".container_door").click(function(){//here click function start
door_anim(open_width,audio_obj);
//setInterval(door_anim,3000,open_width,audio_obj);

});


function door_anim(push_width,object){

$(".hidden_pusher").animate({width:push_width+"px"},{start:function(){

object.setAttribute("src","door_open.mp3");
object.play();

}}).delay(100).animate({width:"0px"},{start:function(){

object.setAttribute("src","door_close.mp3");
object.play();

}});


}


});
