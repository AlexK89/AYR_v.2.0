'use strict';

var showDropdownMenu = document.querySelector('.menu');
var menuButton = document.querySelector('.dropdown_menu img');

menuButton.addEventListener('click', function (ev) {
	ev.stopPropagation();

	if (showDropdownMenu.style.height === '320px') {
		showDropdownMenu.style.height = '0';
	} else {
		showDropdownMenu.style.height = '320px';
	}
});

document.querySelector('body').addEventListener('click', function () {
	showDropdownMenu.style.height = '0';
});