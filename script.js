

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


door_animate();

});// here clikc fucntion ended



function door_animate(){

var pos_lt=$(".active_door_lt").css("left");
var pos_rt=$(".active_door_rt").css("left");

if (pos_rt!=init_pos_rt && pos_lt!=init_pos_lt){

$(".fixed_door_lt").css("box-shadow","3px 0px 2px rgba(0,0,0,.5)")

$(".fixed_door_rt").css("box-shadow","-3px 0px 2px rgba(0,0,0,.5)")


$(".active_door_rt").animate({
left:init_pos_rt

},1000);

$(".active_door_lt").animate({
left:init_pos_lt

},1000);

sound_play(door_sound,"open");

//w=$(".handle_lt").width();
//alert(w);


}else{

$(".fixed_door_lt").css("box-shadow","0px 0px 0px rgba(0,0,0,.5)")

$(".fixed_door_rt").css("box-shadow","0px 0px 0px rgba(0,0,0,.5)")


$(".active_door_rt").animate({
left:"0px"

},1000);

$(".active_door_lt").animate({
left:"0px"

},1000);
//sound_play("open");
sound_play(door_sound,"close");

}





}


function sound_play(object,param){

s1_src="door_open.mp3";
s2_src="door_close.mp3";

if(param=="open"){
	object.setAttribute("src",s1_src);

object.play();


}else if(param=="close"){

	object.setAttribute("src",s2_src);

object.play();


}
//door_sound.play();



}




$("#ck_btn").click(function(){





});


});