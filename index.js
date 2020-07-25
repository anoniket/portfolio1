//ref - https://www.youtube.com/watch?v=TawH-AqHTXc
//https://jsfiddle.net/bootstrapious/ravpqxok


$("a[href='#first']").click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


$("a[href='#second']").click(function(){
    $('html, body').animate({scrollTop : 1340},800);
    return false;
});


window.addEventListener("scroll",function(){
  var val = window.scrollY;
console.log(val);
$("#bg").css("top",val+0.5+"px");
$("#moon").css("left",-val+0.3+"px");
$("#text").css("letter-spacing",val/4+"px");
$("#mountain").css("top",-val/7+0.10+"px");
$("#road").css("top",val/7+0.10+"px");
$("#text").css("top",val+"px");
$("#second").css("clipPath","circle("+val+"px at center");
// $("#second").css("bottom",val+"px");



if(val>320){
  $(".navbar").addClass("active");
  $(".cs").css("padding","5px");
  $(".second").css("position","fixed");


if(val>338){
  $(".dd").css("display","block");
$(".dd").addClass("typewriter");



}

if(val>700){
  $("#second").css({"position":"fixed",
"top":"0",
"left" : "0"
});



}

else if(val<700){
  $("#second").css("position","relative");
}

}
else{
  $(".navbar").removeClass("active");
  $(".cs").css("padding","20px");
}


if(val>989){
  $(".porti").css("width",(val-989)+"px");
}

else{
  $(".porti").css("width","0px");
}


})
