//ref - https://www.youtube.com/watch?v=TawH-AqHTXc
//https://jsfiddle.net/bootstrapious/ravpqxok



$(document).ready(function(){

  setInterval(function(){
    var x = $("#text3").css("color");
    if(x==="rgb(0, 0, 0)"){
      $("#text3").css("color","#00f3ff");
    }
    else if(x==="rgb(0, 243, 255)"){
      $("#text3").css("color","black");
    }

  }, 1000);

});





$("a[href='#first']").click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


$("a[href='#second']").click(function(){
    $('html, body').animate({scrollTop : 1340},800);
    return false;
});

$("a[href='#third']").click(function(){
    $('html, body').animate({scrollTop : 2167},800);
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

// //highlight that particular nav item acc to Section
if(val>=0 && val<714){

  $(".link1").css({"color":"#00f3ff",
"textShadow":"0 0 15px #00f3ff"
});

$(".link1").unbind('mouseenter mouseleave');


$(".link2, .link3").css({  "color": "#555",
  "display": "block",
  "background": "#18191f",
  "textShadow":"none"

});

$(".link2, .link3").hover(function(){
  $(this).css({
    "color":"#00f3ff",
  "textShadow":"0 0 15px #00f3ff"
  });
  }, function(){
  $(this).css({ "color": "#555",
    "display": "block",
    "background": "#18191f",
    "textShadow":"none"});
});

}

else if(val>714 && val<2090){

$(".link2").css({"color":"#00f3ff",
"textShadow":"0 0 15px #00f3ff"
});

$(".link2").unbind('mouseenter mouseleave');

$(".link1, .link3").css({  "color": "#555",
  "display": "block",
  "background": "#18191f",
  "textShadow":"none"

});

$(".link1, .link3").hover(function(){
  $(this).css({
    "color":"#00f3ff",
  "textShadow":"0 0 15px #00f3ff"
  });
  }, function(){
  $(this).css({ "color": "#555",
    "display": "block",
    "background": "#18191f",
    "textShadow":"none"});
});

}
else if(val>2090){

  $(".link3").css({"color":"#00f3ff",
  "textShadow":"0 0 15px #00f3ff"
  });

  $(".link3").unbind('mouseenter mouseleave');

  $(".link1 , .link2").css({  "color": "#555",
    "display": "block",
    "background": "#18191f",
    "textShadow":"none"

  });

  $(".link1, .link2").hover(function(){
    $(this).css({
      "color":"#00f3ff",
    "textShadow":"0 0 15px #00f3ff"
    });
    }, function(){
    $(this).css({ "color": "#555",
      "display": "block",
      "background": "#18191f",
      "textShadow":"none"});
  });


}
// else if(val>710 && val<2167){
//   $(".link2").css({"color":"#00f3ff",
// "textShadow":"0 0 15px #00f3ff"
// });
// $(".link1").removeClass("nav-link");
// }



if(val>320){
  // $(".navbar").addClass("active");
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
  // $(".navbar").removeClass("active");
  $(".cs").css("padding","20px");
}


if(val>989){
  $(".porti").css("width",(val-989)+"px");
}

else{
  $(".porti").css("width","0px");
}


})
