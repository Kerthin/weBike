$('#js-burgerDotMenuFirstSlide, #js-burgerDotMenuSecondSlide').click(function(){
	$(this).toggleClass('clicked');
});
$('#js-burgerDotMenuFirstSlide').click(function(){
	popupMenuFirstSlide	=	$('.humburgerPopupMenuFirstSlide');

	popupMenuFirstSlide.toggleClass('humburgerPopupMenuFirstSlide_active');
});
$('#js-burgerDotMenuSecondSlide').click(function(){
	popupMenuSecondSlide =	$('.humburgerPopupMenuSecondSlide');

	popupMenuSecondSlide.toggleClass('humburgerPopupMenuSecondSlide_active');
});
