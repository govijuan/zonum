
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
logo.leftMargin,
logo.width;

var normalPage = new Object();
normalPage.centeredWidth;

var nosotrosPage = new Object();
nosotrosPage.height,
nosotrosPage.topPos;
var contactoPage = new Object();
contactoPage.height,
contactoPage.topPos;

var proyecto = new Object();
proyecto.text,
proyecto.textWrapWidth,
proyecto.textContWidth,
proyecto.imagesSize,
proyecto.outerMarginsSize,
proyecto.textContHeight,
proyecto.textContTopDist;


 
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
				        centerPadding: '20px',
				        slidesToShow: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        arrows: false,
				        centerMode: true,
				        centerPadding: '15px',
				        slidesToShow: 1
				      }
				    }
				  ]
	});

}

function createIndVertSlider(){
	jQuery('.proyecto-gallery').slick({
		slidesToShow: 2,
		centerMode: true,
		vertical: true,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});
}

function setprojectsHolderWidth(){
	jQuery('.project-holder').css('width', windowWidth +'px');
}

function setLogoPosition(){
	logo.leftMargin = navMenuObj.leftPosition + 3;
	jQuery('.logo-container').css('margin-left', logo.leftMargin + 'px');
}

function setCenteredPosition(){
	logo.width = jQuery('.logo-container').width();
	normalPage.centeredWidth = windowWidth - ((logo.width + 35) * 2);
	if (windowWidth >= 1344){
		normalPage.centeredWidth = windowWidth - ((logo.width + 15) * 2);
	}else if(windowWidth <1344){normalPage.centeredWidth = windowWidth - 30;}
	jQuery('.centered').css('width', normalPage.centeredWidth + 'px');
	if((jQuery('#nosotros-container').length) > 0 ){
		nosotrosPage.height = jQuery('#nosotros-container').height();
		nosotrosPage.topPos = (windoHeight - nosotrosPage.height) / 2;
		jQuery('#nosotros-container').css('top', nosotrosPage.topPos + 'px');
	}else if((jQuery('#contacto-container').length) > 0){
		contactoPage.height = jQuery('#contacto-container').height();
		nosotrosPage.topPos = (windoHeight - contactoPage.height) / 2;
		jQuery('#contacto-container').css('top', nosotrosPage.topPos + 'px');
	}
	
}

function setNavigationItems(){
	navMenuObj.width = jQuery('#menu-menu-principal').width();
	navMenuObj.listLength = jQuery('#menu-menu-principal li').length;
	navMenuObj.listItemWidth = navMenuObj.width / navMenuObj.listLength;
	jQuery('#menu-menu-principal li').css('width', navMenuObj.listItemWidth + 'px');
	navMenuObj.containerWidth = jQuery('.menu-menu-principal-container').width();
	navMenuObj.leftPosition = (navMenuObj.containerWidth - navMenuObj.width) / 2;
	jQuery('#menu-menu-principal').css('margin-left', navMenuObj.leftPosition + 'px');
	jQuery('.main-navigation').css('bottom', '80px');
	if((jQuery('.project-holder').length) > 0 && (jQuery('.current-menu-item').length) < 1){
		jQuery('.menu-item-39').addClass('current-menu-item');
	}
	if((jQuery('#proyecto-container').length) > 0 && (jQuery('.current-menu-item').length) < 1){
		jQuery('.menu-item-39').addClass('current-menu-item');
	}
	
}

function setSlidedimentions(){
	if ((jQuery('#proyecto-container').length) < 1)
	{	
		if(windowWidth > 768){
			sliderObj.oneThirdWidth = Math.round((windowWidth - 120) / 3);
			sliderTextWrapperWidth = ((windowWidth - 120) / 3) -10;
		}
		else if (windowWidth > 480 && windowWidth <= 768){
			sliderObj.oneThirdWidth = Math.round(windowWidth - 40);
			sliderTextWrapperWidth = windowWidth - 50;
		}else{
			sliderObj.oneThirdWidth = Math.round(windowWidth - 30);
			sliderTextWrapperWidth = windowWidth - 40
		}
		jQuery('.slick-slide').css('width', sliderObj.oneThirdWidth +'px');
		sliderObj.photoWrapperWidth = jQuery('.photo-wrapper').width();
		sliderObj.phWrapHeight = sliderObj.photoWrapperWidth * 0.6494;
		sliderObj.phWidth = Math.round(sliderObj.photoWrapperWidth * 1.394);
		jQuery('.photo-wrapper').css('height', sliderObj.phWrapHeight + 'px');
		
		
		jQuery('.photo-wrapper img').css('width', sliderObj.phWidth + 'px');
		jQuery('.text-wrapper, .project-over').css('width', sliderTextWrapperWidth + 'px');
		sliderObj.titleHeight = jQuery('.text-wrapper h2').height();
		sliderObj.paragHeight = jQuery('.text-wrapper p').height();
		sliderObj.txtTopDistance = (sliderObj.phWrapHeight - (sliderObj.titleHeight + sliderObj.paragHeight))/ 2;
		jQuery('.text-wrapper h2').css('margin-top', sliderObj.txtTopDistance + 'px');
	}
}

function setIndProyectoSliderDim(){
	proyecto.outerMarginsSize = windowWidth * 0.0528;
	proyecto.imagesSize = (windowWidth - (proyecto.outerMarginsSize * 2) ) / 2;
	proyecto.textWrapWidth = proyecto.imagesSize;
	proyecto.textContWidth = proyecto.textWrapWidth - (proyecto.outerMarginsSize * 2);
	
	proyecto.textContTopDist = (windoHeight - proyecto.textContHeight) / 2;
	jQuery('.proyecto-gallery img, .proyecto-gallery').css('width', proyecto.imagesSize + 'px');
	jQuery('.proyecto-txt-wrap').css({'width': proyecto.textWrapWidth + 'px', 'left': proyecto.outerMarginsSize +'px'});
	jQuery('.proyecto-left-txt').css({'width': proyecto.textContWidth + 'px', 'margin-left': proyecto.outerMarginsSize +'px'});
	proyecto.textContHeight = jQuery('.proyecto-txt-wrap').height();
	jQuery('.proyecto-txt-wrap').css( 'top', proyecto.textContHeight + 'px');
	jQuery('.proyecto-gallery').css('height', windoHeight + 'px');
}
function setProyectsWrapperPosition(){
	
	sliderObj.height = jQuery('.project-holder').height();
	sliderObj.sliderTopPosition = (windoHeight - sliderObj.height) / 2;
	jQuery('#container').css('top', sliderObj.sliderTopPosition + 'px');
}
 function setProyectsTittlePosition(){
	 jQuery('.project-page-title-wrap').css({'bottom': (sliderObj.sliderTopPosition + sliderObj.height) + "px", 'left': navMenuObj.leftPosition + 'px'});
}

function logoHoverAnimation(){
	jQuery(".logo-container").hover(
		function(){
			jQuery(this).find('.b-w-logo-c').addClass('rotate-b-w-logo').fadeOut(500);
			jQuery(this).find('.color-logo-c').fadeIn(500).addClass('rotate-c-logo');
		},
		
		function(){
			jQuery(this).find('.b-w-logo-c').fadeIn(500).removeClass('rotate-b-w-logo');
			jQuery(this).find('.color-logo-c').removeClass('rotate-c-logo').fadeOut(500);
		}
	);
}


jQuery(document).ready(function(){
	windowWidth = jQuery(window).width();
	windoHeight = jQuery(window).height();
    createSlickSlider();
    if ((jQuery('#proyecto-container').length) > 0){
    	createIndVertSlider();
    }
    setCenteredPosition();
    setprojectsHolderWidth();
    setIndProyectoSliderDim();
    logoHoverAnimation();
    setSlidedimentions();
    setProyectsWrapperPosition();
    setNavigationItems();
    setProyectsTittlePosition();
    //setLogoPosition()
    
	jQuery('.project-over').mouseenter(function(){jQuery(this).siblings('.text-wrapper').fadeOut( 200 )});
	jQuery('.project-over').mouseleave(function(){jQuery(this).siblings('.text-wrapper').fadeIn( 200 )});		
});

jQuery( window ).resize(function() {
	windowWidth = jQuery(window).width();
	windoHeight = jQuery(window).height();
	setCenteredPosition();
	setprojectsHolderWidth();
	setIndProyectoSliderDim();
	setSlidedimentions();
	setProyectsWrapperPosition();
	setNavigationItems();
	setProyectsTittlePosition();
	//setLogoPosition()
    
});

/*function acomodProyPantalla(w){
	var sumOfcentralprojectsWidth = 810;
	var sumOfProyectMargins = w - sumOfcentralprojectsWidth;
	var projectHolderMargin = sumOfProyectMargins/2;
	jQuery('.project-holder').css('left', projectHolderMargin +'px');
}*/