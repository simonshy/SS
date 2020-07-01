$(".smile").click(function(){
  $("span").css("opacity",1);
});
// function openwork(){$(".meniuwork".css("width","66%");)}
// function closework(){$(".meniuwork".css("width",0);)}
$(".openwork").click(function(){
  $(".meniuwork").css("width","66%");
})
$(".x-work, .bb, .endage, .valh, .vik").click(function(){
  $(".meniuwork").css("width",0);
})
