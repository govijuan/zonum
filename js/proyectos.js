(function($){
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

var homeBigLogo = new Object();
homeBigLogo.Imagewidth,
homeBigLogo.Imageleft,
homeBigLogo.height,
homeBigLogo.topPosition;

 
function createSlickSlider(){
	$('.project-holder').slick({
				
				 
				  centerMode: true,
				  centerPadding: '60px',
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  accessibility: true,
				  respondTo: 'min',
				  autoplay: true,
				  autoplaySpeed: 20000,
				  responsive: [
				    {
				      breakpoint: 980,
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
	$('.proyecto-gallery').slick({
		slidesToShow: 2,
		centerMode: true,
		vertical: true,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});
}

function createClientesSlider(){
	$('.all-clientes-holder').slick({
		slidesToShow:6,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		rows:2
	});
}

function setprojectsHolderWidth(){
	$('.project-holder').css('width', windowWidth +'px');
}

function setLogoPosition(){
	logo.width = $('.mobile-logo').width();
	logo.leftMargin = (windowWidth - logo.width) / 2;
	if(windowWidth < 981){
		$('.logo-container').prependTo('.slicknav_menu');
		$('.logo-container').css('margin-left', logo.leftMargin + 'px');
	}
	else if(($('.slicknav_menu .logo-container').length) > 0 && windowWidth > 980){
		$('.slicknav_menu').after($('.slicknav_menu .logo-container'));
		$('.logo-container').css('margin-left', '');

	}
}

function setCenteredPosition(){
	logo.width = $('.logo-container').width();
	normalPage.centeredWidth = windowWidth - ((logo.width + 35) * 2);
	if (windowWidth >= 1344){
		normalPage.centeredWidth = windowWidth - ((logo.width + 15) * 2);
	}else if(windowWidth <1344){normalPage.centeredWidth = windowWidth - 30;}
	$('.centered').css('width', normalPage.centeredWidth + 'px');
	if(($('#nosotros-container').length) > 0 ){
		nosotrosPage.height = $('#nosotros-container').height();
		nosotrosPage.topPos = (windoHeight - nosotrosPage.height) / 2;
		if(windowWidth > 980){
			$('#nosotros-container').css('top', nosotrosPage.topPos + 'px');
		}
		else if(windowWidth < 981){
			$('#nosotros-container').css('top', '');
		}
	}else if(($('#contacto-container').length) > 0){
		if(windowWidth > 980){
			contactoPage.height = $('#contacto-container').height();
			nosotrosPage.topPos = (windoHeight - contactoPage.height) / 2;
			$('#contacto-container').css('top', nosotrosPage.topPos + 'px');
		}
		else
		{
			$('#contacto-container').css('top', '');
		}
	}
	
}

function setHomeLogosPositioning(){
	$('.logo-container').css('display', 'none');
	homeBigLogo.Imagewidth = $('.animated-logo-holder img').width();
	homeBigLogo.height = $('#home-logo-container').height();
	homeBigLogo.Imageleft = (windowWidth - homeBigLogo.Imagewidth) / 2;
	homeBigLogo.topPosition = (windoHeight - homeBigLogo.height) / 2;
	$('.animated-logo-holder').css('margin-left', homeBigLogo.Imageleft + 'px');
	$('#home-logo-container').css('top' , homeBigLogo.topPosition + 'px');
}

function setNavigationItems(){
	navMenuObj.width = $('#menu-menu-principal').width();
	navMenuObj.listLength = $('#menu-menu-principal li').length;
	navMenuObj.listItemWidth = (navMenuObj.width / navMenuObj.listLength) - 1;
	$('#menu-menu-principal li').css('width', navMenuObj.listItemWidth + 'px');
	navMenuObj.containerWidth = $('.menu-menu-principal-container').width();
	navMenuObj.leftPosition = (navMenuObj.containerWidth - navMenuObj.width) / 2;
	$('#menu-menu-principal').css('margin-left', navMenuObj.leftPosition + 'px');
	$('.main-navigation').css('bottom', '80px');
	if(($('.project-holder').length) > 0 && ($('.current-menu-item').length) < 1){
		$('.menu-item-39').addClass('current-menu-item');
	}
	if(($('#proyecto-container').length) > 0 && ($('.current-menu-item').length) < 1){
		$('.menu-item-39').addClass('current-menu-item');
	}
	
}

function setSlidedimentions(){
	if (($('#proyecto-container').length) < 1)
	{	
		if(windowWidth > 980){
			sliderObj.oneThirdWidth = Math.round((windowWidth - 120) / 3);
			sliderTextWrapperWidth = ((windowWidth - 120) / 3) -10;
		}
		else if (windowWidth > 480 && windowWidth <= 980){
			sliderObj.oneThirdWidth = Math.round(windowWidth - 40);
			sliderTextWrapperWidth = windowWidth - 50;
		}else{
			sliderObj.oneThirdWidth = Math.round(windowWidth - 30);
			sliderTextWrapperWidth = windowWidth - 40
		}
		$('.slick-slide').css('width', sliderObj.oneThirdWidth +'px');
		sliderObj.photoWrapperWidth = $('.photo-wrapper').width();
		sliderObj.phWrapHeight = sliderObj.photoWrapperWidth * 0.6494;
		sliderObj.phWidth = Math.round(sliderObj.photoWrapperWidth * 1.394);
		$('.photo-wrapper').css('height', sliderObj.phWrapHeight + 'px');
		
		
		$('.photo-wrapper img').css('width', sliderObj.phWidth + 'px');
		$('.text-wrapper, .project-over').css('width', sliderTextWrapperWidth + 'px');
		sliderObj.titleHeight = $('.text-wrapper h2').height();
		sliderObj.paragHeight = $('.text-wrapper p').height();
		sliderObj.txtTopDistance = (sliderObj.phWrapHeight - (sliderObj.titleHeight + sliderObj.paragHeight))/ 2;
		$('.text-wrapper h2').css('margin-top', sliderObj.txtTopDistance + 'px');
	}
}

function setIndProyectoSliderDim(){
	proyecto.outerMarginsSize = windowWidth * 0.0528;
	proyecto.imagesSize = (windowWidth - (proyecto.outerMarginsSize * 2) ) / 2;
	proyecto.textWrapWidth = proyecto.imagesSize;
	proyecto.textContWidth = proyecto.textWrapWidth - (proyecto.outerMarginsSize * 2);
	
	proyecto.textContTopDist = (windoHeight - proyecto.textContHeight) / 2;
	$('.proyecto-gallery img, .proyecto-gallery').css('width', proyecto.imagesSize + 'px');
	$('.proyecto-txt-wrap').css({'width': proyecto.textWrapWidth + 'px', 'left': proyecto.outerMarginsSize +'px'});
	$('.proyecto-left-txt').css({'width': proyecto.textContWidth + 'px', 'margin-left': proyecto.outerMarginsSize +'px'});
	proyecto.textContHeight = $('.proyecto-txt-wrap').height();
	$('.proyecto-txt-wrap').css( 'top', proyecto.textContHeight + 'px');
	$('.proyecto-gallery').css('height', windoHeight + 'px');
}
function setProyectsWrapperPosition(){
	
	sliderObj.height = $('.project-holder').height();
	if(windowWidth > 980){
		sliderObj.sliderTopPosition = (windoHeight - sliderObj.height) / 2;
		if(($('.slider-general').length) > 0 ){
			$('#container').css('top', sliderObj.sliderTopPosition + 'px');
		}
	}
	else if(windowWidth < 981){
		$('#container').css({
			'position': 'relative',
			'top': ''
		});
	}
}
 function setProyectsTittlePosition(){
 	if(windowWidth > 980){
 	var menuPrincipalWidth = $('#menu-menu-principal').width();
	 	$('.project-page-title-wrap').css({	'bottom': (sliderObj.sliderTopPosition + sliderObj.height + 20) + 'px', 
	 										'left': navMenuObj.leftPosition + 'px', 
	 										'width': menuPrincipalWidth + 'px'});
	 										console.log(menuPrincipalWidth);
	}
	else if(windowWidth < 981){
		$('.project-page-title-wrap').css({'bottom':  '', 'left':  ''});

	}
}

function logoHoverAnimation(){
	$(".logo-container").hover(
		function(){
			$(this).find('.color-logo-c').addClass('rotate-c-logo').fadeOut(500);
			$(this).find('.b-w-logo-c').fadeIn(500).addClass('rotate-b-w-logo');
		},
		
		function(){
			$(this).find('.color-logo-c').fadeIn(500).removeClass('rotate-c-logo');
			$(this).find('.b-w-logo-c').removeClass(' rotate-b-w-logo').fadeOut(500);
		}
	);
}
function putTargetAttrToGalery(){
	$('.menu-item a').each(function () {
    if ($(this).text() == 'Galeria') {
        $(this).attr('target', '_blanc');
    }
});
}
//var simpleLightbox = $('.bio-1-feria a').simpleLightbox();
function setBioContentWindowHeight(){
	var bio = new Object;
	bio.contentTitle = $('.page-title-wrap');
	bio.contentTitle.height = bio.contentTitle.height();
	bio.mainNavHeightAndMarg = ($('.main-navigation').height()) + 180;
	bio.contentWrapHeight = (windoHeight - bio.contentTitle.height) - bio.mainNavHeightAndMarg;
	$('.bio-content-wrap').css('height', bio.contentWrapHeight + 'px');
}

function bioScrollBehave(){
	$('bio-evento-wrap').on('scrollSpy:enter', function() {
	console.log('enter:', $(this).attr('id'));
});

$('bio-evento-wrap').on('scrollSpy:exit', function() {
	console.log('exit:', $(this).attr('id'));
});
}

/*function sensorBioLink(){
	$('.bio-content-wrap').scroll(function(){
		console.log($('.bio-1-feria:in-viewport').text());
	});
}*/
$(document).ready(function(){
	$('.menu').slicknav({
		label: '',
		duration: 700,
	});
	windowWidth = $(window).width();
	windoHeight = $(window).height();
    createSlickSlider();
    if (($('#proyecto-container').length) > 0){
    	createIndVertSlider();
    }  
    if (($('#home-logo-container').length) > 0){
	    setHomeLogosPositioning();
    }  
    if( ($('.bio-content-wrap').length) > 0){
	    setBioContentWindowHeight();
    }
    putTargetAttrToGalery();
    createClientesSlider();
    setCenteredPosition();
    setprojectsHolderWidth();
    setIndProyectoSliderDim();
    if(windowWidth > 980){
    	logoHoverAnimation();
    }
    bioScrollBehave();
    setSlidedimentions();
    setProyectsWrapperPosition();
    setNavigationItems();
    setProyectsTittlePosition();
    setLogoPosition();
    if (($('.category-title-wrap').length) > 0){
		    $('.project-over').mouseenter(function(){	$(this).siblings('.text-wrapper').fadeOut( 300 );
													$(this).siblings('.text-wrapper').css('background', 'rgba(13,18,31,0)');
									});
			$('.project-over').mouseleave(function(){	$(this).siblings('.text-wrapper').fadeIn( 300 );
													$(this).siblings('.text-wrapper').css('background', 'rgba(13,18,31,0.5)');
									});
    }
    else{
			$('.project-over').mouseenter(function(){	$(this).siblings('.text-wrapper').find('.proy-lower-info').fadeOut( 300 );
														$(this).siblings('.text-wrapper').css('background', 'rgba(13,18,31,0)');
										});
			$('.project-over').mouseleave(function(){	$(this).siblings('.text-wrapper').find('.proy-lower-info').fadeIn( 300 );
														$(this).siblings('.text-wrapper').css('background', 'rgba(13,18,31,0.5)');
										});
	}
});

$( window ).resize(function() {
	windowWidth = $(window).width();
	windoHeight = $(window).height();
	if (($('#home-logo-container').length) > 0){
		setHomeLogosPositioning();
	}
	setCenteredPosition();
	setprojectsHolderWidth();
	setIndProyectoSliderDim();
	setSlidedimentions();
	setProyectsWrapperPosition();
	setNavigationItems();
	setProyectsTittlePosition();
	if(windowWidth > 980){
    	logoHoverAnimation();
    }
    setLogoPosition();
    
});

/*function acomodProyPantalla(w){
	var sumOfcentralprojectsWidth = 810;
	var sumOfProyectMargins = w - sumOfcentralprojectsWidth;
	var projectHolderMargin = sumOfProyectMargins/2;
	$('.project-holder').css('left', projectHolderMargin +'px');
}*/
})( jQuery );