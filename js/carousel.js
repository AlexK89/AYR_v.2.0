'use strict';

var carousels = document.querySelectorAll('.carousel');
var carouselArrows = document.querySelectorAll('.carousel__arrows');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = carouselArrows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var carouselArrow = _step.value;

		carouselArrow.addEventListener('click', function () {
			changeImage(this);
		});
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

function changeImage(arrow) {
	if (arrow.classList.contains('left_arrow')) {
		switchCarouselImage(arrow, -1);
	}
	if (arrow.classList.contains('right_arrow')) {
		switchCarouselImage(arrow, 1);
	}
}

function switchCarouselImage(carouselArrow, direction) {
	var carouselImages = carouselArrow.parentNode.parentNode.querySelectorAll('.images img');

	for (var i = 0; i < carouselImages.length; i++) {
		if (carouselImages[i].classList.contains('active')) {
			carouselImages[i].classList.remove('active');

			moveToNextImage(carouselImages, i, direction);
			break;
		}
	}
}

function moveToNextImage(carouselImages, newImagePosition, direction) {
	newImagePosition += direction;

	switch (true) {
		case !carouselImages[newImagePosition] && direction > 0:
			carouselImages[0].classList.add('active');
			break;
		case !carouselImages[newImagePosition] && direction < 0:
			carouselImages[carouselImages.length - 1].classList.add('active');
			break;
		default:
			carouselImages[newImagePosition].classList.add('active');
	}
}

// Carousel interval

var _loop = function _loop(carousel) {
	var interval = carousel.dataset.interval * 1000;
	var nextArrow = carousel.querySelector('.right_arrow');

	setInterval(function () {
		changeImage(nextArrow);
	}, interval);
};

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = carousels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var carousel = _step2.value;

		_loop(carousel);
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}