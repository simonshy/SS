$(".smile").click(function(){
  $(".smile").css("letter-spacing",5);
  $(".smile").css("color","#f73859");
});
// function openwork(){$(".meniuwork".css("width","66%");)}
// function closework(){$(".meniuwork".css("width",0);)}
$(".openwork").click(function(){
  $(".meniuwork").css("width","66%");
})
$(".x-work, .bb, .endage, .valh, .vik").click(function(){
  $(".meniuwork").css("width",0);
})
