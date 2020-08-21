$(document).ready(function(){var TOP_OFFSET_DESKTOP=1250;var DEFAULT_OFFSET=20;var ITERATION_DURATION=5
var ANIMATION_DURATION=250
var AMOUNT_ITERATIONS=ANIMATION_DURATION/ITERATION_DURATION
if(!$('#go-to-top-btn').length){addButton();$(window).resize(function(){setBtnPosition();});$(window).scroll(function(){showButton();});}
function addButton(){$(document.body).append($('<div/>',{'id':'go-to-top-btn'}).append($('<button />',{'class':'go-to-top-btn'})));var $goToTopBtnWrap=$('#go-to-top-btn');var $goToTopBtn=$goToTopBtnWrap.find('.go-to-top-btn');$goToTopBtnWrap.hide();$goToTopBtn.click(smoothScrollToTop);setBtnPosition()}
function setBtnPosition(){var $mainContainer=$('#mainContainer');var $goToTopBtn=$('#go-to-top-btn').find('.go-to-top-btn');var mainContainerWidth=$mainContainer.width();var leftOffset=$mainContainer.offset().left;var btnWidth=$goToTopBtn.outerWidth();var btnOffset=leftOffset-DEFAULT_OFFSET-btnWidth;var windowWidth=window.innerWidth;var minWidth=mainContainerWidth+(btnWidth*2+DEFAULT_OFFSET*4);var onContentInTabletMode=windowWidth<minWidth&&windowWidth>minTabletSize;var onContentInDesktopMode=windowWidth<minWidth&&windowWidth>maxTabletSize;if(onContentInTabletMode||onContentInDesktopMode){btnOffset=leftOffset+DEFAULT_OFFSET;}
if(getBrowserWidth()<=minTabletSize){btnOffset=DEFAULT_OFFSET}
$goToTopBtn.css('left',btnOffset+'px');}
function showButton(){var $goToTopBtn=$('#go-to-top-btn');var show=TOP_OFFSET_DESKTOP<=window.pageYOffset;if(getBrowserWidth()<=minTabletSize){show=(window.innerHeight*2)<=window.pageYOffset;}
if(show){$goToTopBtn.show();}else{$goToTopBtn.hide();}}
function smoothScrollToTop(){var step=window.pageYOffset/AMOUNT_ITERATIONS;var scrollToTop=window.setInterval(function(){var pos=window.pageYOffset;if(pos>0){window.scrollTo(0,pos-step);}else{window.clearInterval(scrollToTop);}},ITERATION_DURATION);}});