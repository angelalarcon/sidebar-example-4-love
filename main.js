$('.btn-menu').click(function(){
	$('.sidebar').toggleClass('open');
});

$('ul.categories li a').click(function(){
	$(this).next('ul.dropdown').toggleClass('open');
});