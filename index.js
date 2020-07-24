//ref - https://www.youtube.com/watch?v=TawH-AqHTXc
//https://jsfiddle.net/bootstrapious/ravpqxok



window.addEventListener("scroll",function(){
  var val = window.scrollY;
console.log(val);
$("#bg").css("top",val+0.5+"px");
$("#moon").css("left",-val+0.3+"px");
$("#text").css("letter-spacing",val/4+"px");
$("#mountain").css("top",-val/7+0.10+"px");
$("#road").css("top",val/7+0.10+"px");
$("#text").css("top",val+"px");

if(val>270){
  $(".navbar").addClass("active");
}
else{
  $(".navbar").removeClass("active");
}


})
