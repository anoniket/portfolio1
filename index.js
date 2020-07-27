//ref - https://www.youtube.com/watch?v=TawH-AqHTXc
//https://jsfiddle.net/bootstrapious/ravpqxok




const TypeWriter = function(txtElement, words, wait = 800) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if(this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 100;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 250;
  }

  setTimeout(() => this.type(), typeSpeed);
}


document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}













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
$("#moon").css("left",-val+0.5+"px");
$("#text").css("letter-spacing",val/2+"px");
$("#mountain").css("top",(-val/8)-50+"px");
$("#road").css("top",val/8+0.10+"px");
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

else if(val>714 && val<2010){

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
else if(val>2010){

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
