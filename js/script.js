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


$(document).ready(function() { 
  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});

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