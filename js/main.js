$('.signin').on ('click', function(e) {
	$('.modal').fadeIn();
});
$('.close').on ('click', function(e) {
	$('.modal').fadeOut();
});
$('.submit').on('click', function(e){
	$("input").addClass('error');
})
$("input").on('mouseover', function(){
	$("input").removeClass('error');
})

	