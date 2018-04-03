'use strict';

var showDropdownMenu = document.querySelector('.menu');
var menuButton = document.querySelector('.dropdown_menu img');

menuButton.addEventListener('click', function (ev) {
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

document.querySelector('body').addEventListener('touchend', function () {
	showDropdownMenu.classList.remove('active');
});