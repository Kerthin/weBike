$('.burgerMenuWrap__burgerMenu').click(function(){
	menuBlock	=	$('.humburgerPopupMenu');

	$(this).toggleClass('clicked');
	menuBlock.toggleClass('humburgerPopupMenu_active')
});
