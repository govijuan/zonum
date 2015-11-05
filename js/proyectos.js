
var sliderObj = new Object();
var sliderTextWrapperWidth = 0;
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
	var oneThirdWidth = Math.round((windowWidth - 120) / 3);
	jQuery('.slick-slide').css('width', oneThirdWidth +'px');
	var photoWrapperWidth = jQuery('.photo-wrapper').width();
	var photoWrapperheight = photoWrapperWidth * 0.6494;
	var sliderPhotoWidth = Math.round(photoWrapperWidth * 1.394);
	jQuery('.photo-wrapper').css('height', photoWrapperheight + 'px');
	sliderTextWrapperWidth = ((windowWidth - 120) / 3) -10;
	jQuery('.photo-wrapper img').css('width', sliderPhotoWidth + 'px');
	jQuery('.text-wrapper, .project-over').css('width', sliderTextWrapperWidth + 'px');
	var sliderTitleHeight = jQuery('.text-wrapper h2').height();
	var sliderParagraphHeight = jQuery('.text-wrapper p').height();
	var sliderTextTopDistance = (photoWrapperheight - (sliderTitleHeight + sliderParagraphHeight))/ 2;
	jQuery('.text-wrapper h2').css('margin-top', sliderTextTopDistance + 'px');
	//console.log(sliderParagraphHeight);
}

/*function slideHoverBehavior(){
	jQuery('.text-wrapper').mouseenter(function(){jQuery(this).fadeOut( 100 )});
	jQuery('.text-wrapper').mouseleave(function(){jQuery(this).fadeIn( 500 )});
}*/


var SliderObj = new Object();
var windowWidth = 0;
var projectHolderHeight = 0;

jQuery(document).ready(function(){
	windowWidth = jQuery(window).width();
    createSlickSlider();
    setprojectsHolderWidth();
    setSlidedimentions();
    
   	
   	
	
	//slideHoverBehavior();
	jQuery('.project-over').mouseenter(function(){jQuery(this).siblings('.text-wrapper').fadeOut( 200 )});
	jQuery('.project-over').mouseleave(function(){jQuery(this).siblings('.text-wrapper').fadeIn( 200 )});
	/*jQuery('.text-wrapper').hover(
	function(){jQuery(this).stop().fadeOut( 500 );},
	function(){jQuery(this).stop().fadeIn( 500 );}
	);*/
	 
		
});

jQuery( window ).resize(function() {
	windowWidth = jQuery(window).width();
	setprojectsHolderWidth();
	setSlidedimentions();
});

/*function acomodProyPantalla(w){
	var sumOfcentralprojectsWidth = 810;
	var sumOfProyectMargins = w - sumOfcentralprojectsWidth;
	var projectHolderMargin = sumOfProyectMargins/2;
	jQuery('.project-holder').css('left', projectHolderMargin +'px');
}*/