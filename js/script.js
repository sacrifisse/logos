


window.onscroll = function() {myFunction()};

var header = document.getElementById("foodmenu");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



$('input[name="delivery"]').click(function(){
	var target = $('#block-' + $(this).val());
 
	$('.block-text').not(target).hide(0);
	target.fadeIn(500);
});
$('input[name="pay"]').click(function(){
	var target = $('#block-' + $(this).val());
 
	$('.block-text2').not(target).hide(0);
	target.fadeIn(500);
});
$('input[name="delivery-time"]').click(function(){
	var target = $('#block-' + $(this).val());
 
	$('.block-text3').not(target).hide(0);
	target.fadeIn(500);
});



$(document).ready(function() {
  $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
  });
});

(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById('horizontal-scroller').scrollLeft -= (delta*40); // Multiplied by 40
      e.preventDefault();
  }
  if (document.getElementById('horizontal-scroller').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById('horizontal-scroller').addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document.getElementById('horizontal-scroller').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.getElementById('horizontal-scroller').attachEvent("onmousewheel", scrollHorizontally);
  }
})();
