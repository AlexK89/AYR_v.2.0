let showDropdownMenu = document.querySelector('.menu');
let menuButton = document.querySelector('.dropdown_menu img');


menuButton.addEventListener('click', (ev) => {
	ev.stopPropagation();

	if (!showDropdownMenu.classList.contains('active')) {
		showDropdownMenu.classList.add('active');
	} else {
		showDropdownMenu.classList.remove('active');
	}
});

document.querySelector('body').addEventListener('click', function () {
	showDropdownMenu.classList.remove('active');
});