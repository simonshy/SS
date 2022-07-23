$(document).ready(function(){
	$(".menclose, .meniu").click(function(){
		$(".menclose").toggleClass("deschide");
    $(".meniu").toggleClass("inchide");
	});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path:"introSS.json"
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("talpa"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path:"SStalpa.json"
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("mail"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path:"papermail.json"
});