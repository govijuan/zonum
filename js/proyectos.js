
var sliderObj = new Object();
/*Slider Object Properties*/
sliderObj.oneThirdWidth,
sliderObj.photoWrapperWidth,
sliderObj.phWrapHeight,
sliderObj.phWidth,
sliderObj.titleHeight,
sliderObj.paragHeight,
sliderObj.txtTopDistance,
sliderObj.height,
sliderObj.sliderTopPosition;

var sliderTextWrapperWidth = 0;
var windoHeight = 0;
/* Navigation Menu object and properties*/
var navMenuObj = new Object;
/*properties*/
navMenuObj.width, 
navMenuObj.listLength, 
navMenuObj.listItemWidth,
navMenuObj.containerWidth,
navMenuObj.leftPosition;

var logo = new Object();
logo.leftMargin;

 
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

function setLogoPosition(){
	logo.leftMargin = navMenuObj.leftPosition + 3;
	jQuery('.logo-container').css('margin-left', logo.leftMargin + 'px');
}

function setNavigationItems(){
	navMenuObj.width = jQuery('#menu-menu-principal').width();
	navMenuObj.listLength = jQuery('#menu-menu-principal li').length;
	navMenuObj.listItemWidth = navMenuObj.width / navMenuObj.listLength;
	jQuery('#menu-menu-principal li').css('width', navMenuObj.listItemWidth + 'px');
	navMenuObj.containerWidth = jQuery('.menu-menu-principal-container').width();
	navMenuObj.leftPosition = (navMenuObj.containerWidth - navMenuObj.width) / 2;
	jQuery('#menu-menu-principal').css('margin-left', navMenuObj.leftPosition + 'px');
	
}

function setSlidedimentions(){
	sliderObj.oneThirdWidth = Math.round((windowWidth - 120) / 3);
	jQuery('.slick-slide').css('width', sliderObj.oneThirdWidth +'px');
	sliderObj.photoWrapperWidth = jQuery('.photo-wrapper').width();
	sliderObj.phWrapHeight = sliderObj.photoWrapperWidth * 0.6494;
	sliderObj.phWidth = Math.round(sliderObj.photoWrapperWidth * 1.394);
	jQuery('.photo-wrapper').css('height', sliderObj.phWrapHeight + 'px');
	sliderTextWrapperWidth = ((windowWidth - 120) / 3) -10;
	jQuery('.photo-wrapper img').css('width', sliderObj.phWidth + 'px');
	jQuery('.text-wrapper, .project-over').css('width', sliderTextWrapperWidth + 'px');
	sliderObj.titleHeight = jQuery('.text-wrapper h2').height();
	sliderObj.paragHeight = jQuery('.text-wrapper p').height();
	sliderObj.txtTopDistance = (sliderObj.phWrapHeight - (sliderObj.titleHeight + sliderObj.paragHeight))/ 2;
	jQuery('.text-wrapper h2').css('margin-top', sliderObj.txtTopDistance + 'px');
	
}
function setProyectsWrapperPosition(){
	
	sliderObj.height = jQuery('.project-holder').height();
	sliderObj.sliderTopPosition = (windoHeight - sliderObj.height) / 2;
	jQuery('#container').css('top', sliderObj.sliderTopPosition + 'px');
}


//var windowWidth = 0;

jQuery(document).ready(function(){
	windowWidth = jQuery(window).width();
	windoHeight = jQuery(window).height();
    createSlickSlider();
    setprojectsHolderWidth();
    setSlidedimentions();
    setNavigationItems();
    setLogoPosition()
    setProyectsWrapperPosition();
	jQuery('.project-over').mouseenter(function(){jQuery(this).siblings('.text-wrapper').fadeOut( 200 )});
	jQuery('.project-over').mouseleave(function(){jQuery(this).siblings('.text-wrapper').fadeIn( 200 )});		
});

jQuery( window ).resize(function() {
	windowWidth = jQuery(window).width();
	setprojectsHolderWidth();
	setSlidedimentions();
	setNavigationItems();
	setLogoPosition()
    setProyectsWrapperPosition();
});

/*function acomodProyPantalla(w){
	var sumOfcentralprojectsWidth = 810;
	var sumOfProyectMargins = w - sumOfcentralprojectsWidth;
	var projectHolderMargin = sumOfProyectMargins/2;
	jQuery('.project-holder').css('left', projectHolderMargin +'px');
}*/