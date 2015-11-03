

function createSlickSlider(){
	jQuery('.project-holder').slick({
				
				 
				  centerMode: true,
				  centerPadding: '60px',
				  slidesToShow: 3,
				  accessibility: true,
				  respondTo: 'min',

				  responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        arrows: false,
				        centerMode: true,
				        centerPadding: '40px',
				        slidesToShow: 3
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        arrows: false,
				        centerMode: true,
				        centerPadding: '40px',
				        slidesToShow: 1
				      }
				    }
				  ]
	});

}

function setprojectsHolderWidth(){
	jQuery('.project-holder').css('width', windowWidth +'px');
}
function setSlidedimentions(){
	var oneThirdWidth = Math.round(windowWidth/3);
	jQuery('.slick-slide').css('width', oneThirdWidth +'px');
	var GetSliderPhotoWrapperWidth = jQuery('.slick-slide').width();
	var photoWrapperWidth = jQuery('.photo-wrapper').width();
	var photoWrapperheight = photoWrapperWidth * 0.6494;
	var sliderPhotoWidth = Math.round(photoWrapperWidth * 1.394);
	jQuery('.photo-wrapper').css('height', photoWrapperheight + 'px');
	var sliderTextWrapperWidth = (jQuery('.photo-wrapper').innerWidth()) * 0.915;
	jQuery('.photo-wrapper img').css('width', sliderPhotoWidth + 'px');
	jQuery('.text-wrapper').css('width', sliderTextWrapperWidth + 'px');
}

var SliderObj = new Object();
var windowWidth = 0;
var projectHolderHeight = 0;

jQuery(document).ready(function($){
	windowWidth = jQuery(window).width();
	
    setprojectsHolderWidth();
    //projectHolderHeight = ($('.project-holder').width()) * 0.2126;
    //$('.project-holder').css('height', projectHolderHeight + 'px');
	createSlickSlider();
	//acomodProyPantalla(windowWidth);
	setSlidedimentions();
	 
	 
		
});

jQuery( window ).resize(function() {
	windowWidth = jQuery(window).width();
	//projectHolderHeight = windowWidth * 0.0456;
	setprojectsHolderWidth();
	setSlidedimentions();
	
});

/*function acomodProyPantalla(w){
	var sumOfcentralprojectsWidth = 810;
	var sumOfProyectMargins = w - sumOfcentralprojectsWidth;
	var projectHolderMargin = sumOfProyectMargins/2;
	jQuery('.project-holder').css('left', projectHolderMargin +'px');
}*/