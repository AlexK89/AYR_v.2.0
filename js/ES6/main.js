const bookingButton = document.querySelector('.book_journey');

window.addEventListener('scroll', function() {
	// console.log(window.scrollY);
	if (window.scrollY > 400) {
		bookingButton.classList.add('active');
	} else {
		bookingButton.classList.remove('active');
	}
});