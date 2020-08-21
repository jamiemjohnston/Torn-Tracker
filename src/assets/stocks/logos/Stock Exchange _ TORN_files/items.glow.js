function hex2rgb(hex,opacity){hex=(hex+'').trim();opacity=opacity||1;var rgb=null;var match=hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);if(!match){return null;}
rgb={};hex=match[1];if(hex.length==6){rgb.r=parseInt(hex.substring(0,2),16);rgb.g=parseInt(hex.substring(2,4),16);rgb.b=parseInt(hex.substring(4,6),16);}
else if(hex.length==3){rgb.r=parseInt(hex.substring(0,1)+hex.substring(0,1),16);rgb.g=parseInt(hex.substring(1,2)+hex.substring(1,2),16);rgb.b=parseInt(hex.substring(2,3)+hex.substring(2,3),16);}
rgb.css='rgb'+(opacity?'a':'')+'(';rgb.css+=rgb.r+','+rgb.g+','+rgb.b;rgb.css+=(opacity?','+opacity:'')+')';return rgb;}
function isCanvasSupported(){var elem=document.createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'));}
window.convertImageToCanvasOff=false;function convertImageToCanvas(item,imgRemove,offsetX,offsetY){if(window.changeItemsSizeOff){return false;}
if(isCanvasSupported()){var shadowBlur=9;offsetX=(offsetX!==undefined)?offsetX:0;offsetY=(offsetY!==undefined)?offsetY:0;var imageOffsetWidth=offsetX*2;var imageOffsetHeight=offsetY*2;item.each(function(){var $elem=$(this);var color=$elem.attr('data-color');var opacity=$elem.attr('data-opacity');var overlay=$elem.attr('data-overlay');imgRemove=imgRemove||false;var src=$elem.attr('src');var size=$elem.attr('data-size');var cl=$elem.attr('data-cl')||'';var itemOptions={blank:{width:100,height:50},crimes_medium:{width:60,height:30},crimes_blank:{width:60,height:30},large:{width:100,height:50},large_bg_gray:{width:100,height:50},large_dark:{width:100,height:50},medium:{width:60,height:30},small:{width:38,height:19}};if(!src||!color){return null;}
var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");var img=new Image();img.src=src;if(itemOptions[size]){var imageRegExp=new RegExp('(\\/images\\/items\\/\\d+\\/)?'+'large'+'(\\.png){1}(\\?v=\\d+)?','g');var currentSrc=img.getAttribute('src');img.src=currentSrc.replace(imageRegExp,function(str,$1,$2){return $1+size+$2;});}
canvas.className="item-glow "+cl;$(img).load(function(){canvas.width=img.width+imageOffsetWidth;canvas.height=img.height+imageOffsetHeight;ctx.shadowBlur=shadowBlur;ctx.shadowColor=hex2rgb(color,opacity).css;ctx.drawImage(img,offsetX,offsetY);var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgData.data;var red=hex2rgb(overlay).r;var green=hex2rgb(overlay).g;var blue=hex2rgb(overlay).b;for(var i=0,n=pix.length;i<n;i+=4){pix[i]=(pix[i]<128)?2*red*pix[i]/255:255-2*(255-red)*(255-pix[i])/255;pix[i+1]=(pix[i+1]<128)?2*green*pix[i+1]/255:255-2*(255-green)*(255-pix[i+1])/255;pix[i+2]=(pix[i+2]<128)?2*blue*pix[i+2]/255:255-2*(255-blue)*(255-pix[i+2])/255;}
ctx.putImageData(imgData,0,0);});$elem.before($(canvas));if(imgRemove){$elem.remove();}});return true;}
else{return false;}}