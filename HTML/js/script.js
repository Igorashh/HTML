$(document).ready(function () { 
$(document).on("scroll", onScroll); 
//smoothscroll 
$('a[href^="#"]').on('click', function (e) { 
e.preventDefault(); 
$(document).off("scroll"); 
$('a').each(function () { 
$(this).removeClass('active'); 
}) 
$(this).addClass('active'); 
var target = this.hash, 
menu = target; 
$target = $(target); 
$('html, body').stop().animate({ 
'scrollTop': $target.offset().top+2 
}, 1500, 'swing', function () { 
window.location.hash = target; 
$(document).on("scroll", onScroll); 
}); 
}); 
}); 
function onScroll(event){ 
var scrollPos = $(document).scrollTop(); 
$('#menu_header ul li a').each(function () { 
var currLink = $(this); 
var refElement = $(currLink.attr("href")); 
if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) { 
$('#menu_header ul li a').removeClass("active"); 
currLink.addClass("active"); 
} 
else{ 
currLink.removeClass("active"); 
} 
}); 
}

$('.regButton').click(function(){ 
$('.windows').fadeIn(1000); 
}); 
$('.close').click(function(){ 
$('.windows').fadeOut(1000); 
}); 

$('body').on('click', '.clickk, .mobile-menu ul li a', function () {
$('.mobile-menu > .mobile-ul').toggleClass('active');
});