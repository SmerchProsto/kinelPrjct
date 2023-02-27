var headingOfHeader = document.querySelectorAll(".slider-caption");
var paragraphsOfHeader = document.querySelectorAll(".slider-description");
var currentSlide = 0;

var buttonClose = document.querySelector(".popup-img-close");
var buttonPrev = document.querySelector(".prev");
var buttonNext = document.querySelector(".next");
var popupImg = document.querySelector(".popup-img");
var imgInPopup = document.querySelector(".popup-slider-img");
var html = document.documentElement;

var imageGallery = document.querySelector(".gallery-block-img");
var imagesGallery = document.querySelectorAll(".gallery-block-img");
var galleryBlock = document.querySelector(".gallery-block");

var idImgInGallery = 0;

let selectElem = document.getElementById('select');
let pElem = document.getElementById('p');

if (selectElem !== null) {
	selectElem.addEventListener('change', function() {
		let index = selectElem.selectedIndex;
		let value = selectElem.value;
		pElem.innerHTML = `<div class=smartLine><p>Номер телефона: <a href="tel:${value}">${value}</a></p></div>`;
	});
}

giveIds();
checkElementForSlider();

if (buttonNext !== null && buttonPrev !== null && buttonClose !== null) {
	buttonClose.onclick = closePopup;
	buttonPrev.onclick = prevImg;
	buttonNext.onclick = nextImg;
}


function giveIds() {
	for (var i = 0; i < imagesGallery.length; i++) {
		imagesGallery[i].setAttribute("id", i);
	}

}
function nextImg() {
	idImgInGallery++;
	if (idImgInGallery > imagesGallery.length - 1) {
		idImgInGallery = 0
	}

	imgInPopup.src = document.getElementById(idImgInGallery).src;
}

function prevImg() {
	idImgInGallery--;
	if (idImgInGallery < 0) {
		idImgInGallery = imagesGallery.length - 1;
	}

	imgInPopup.src = document.getElementById(idImgInGallery).src;
}

if (galleryBlock !== null) {
	galleryBlock.onclick = function (event) {
		let target = event.target;
		idImgInGallery = target.id;
		if (target.className === imageGallery.className) {
			openPopup(target);
		}
	}
}

function checkElementForSlider() {
	if (headingOfHeader.length != 0 && paragraphsOfHeader.length != 0) {
		var slideInterval = setInterval(nextSlide,3000);
	}
}
function closePopup() {
	popupImg.classList.add("hidden");
	html.classList.remove("overlay");
}

function openPopup(target) {
	popupImg.classList.remove("hidden");
	imgInPopup.src = target.src;
	html.classList.add("overlay");
}


function nextSlide() {
	if (currentSlide > headingOfHeader.length - 1 && currentSlide > paragraphsOfHeader.length - 1) {
		currentSlide = 0;
	}
	if (currentSlide != 0) {
		headingOfHeader[currentSlide-1].classList.add("slider-caption-off");
		paragraphsOfHeader[currentSlide-1].classList.add("slider-description-off");
	} else {
		headingOfHeader[headingOfHeader.length-1].classList.add("slider-caption-off");
		paragraphsOfHeader[paragraphsOfHeader.length-1].classList.add("slider-description-off");
	}
		headingOfHeader[currentSlide].classList.remove("slider-caption-off");
		paragraphsOfHeader[currentSlide].classList.remove("slider-description-off");
		currentSlide++;
}