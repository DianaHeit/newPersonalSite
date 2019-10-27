// jQuery toggle menu
$("button").click(function() {
  $("header").animate({
    height: 'toggle'
  });
});

// JavaScript toggle background color style
var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function(){
  body.classList.toggle("toggle-style");
});
