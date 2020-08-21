function webPChecker(){const DELAY=50;const MAX_TRIES=200;const TEST_IMG='/images/v2/retina/webp_pixel.webp';const BODY_NODE=document&&document.body;let INTERVAL_ID=null;let currentTry=0;function removeWebpClass(config){var isNotReady=config.notReady||false;var tempBodyNode=isNotReady?document&&document.body:BODY_NODE;tempBodyNode.classList.remove('webp-support');};function runRecheckingBodyLoop(){if(document&&document.body){removeWebpClass({notReady:true})
clearInterval(INTERVAL_ID)
return}
if(currentTry>=MAX_TRIES){console.error('The body node was not founded. Revert.');clearInterval(INTERVAL_ID)}
currentTry=currentTry+1};function notifyDocumentByWebStatus(supported){if(supported){return;}
console.log('WEBP is not supported by this browser yet :(')
if(!BODY_NODE){INTERVAL_ID=setInterval(runRecheckingBodyLoop,DELAY)
return}
removeWebpClass()};function detectWebpSupport(){var img=new Image();img.src=TEST_IMG;img.onload=function(){var hasWebP=!!(img.height>0&&img.width>0);notifyDocumentByWebStatus(hasWebP);};img.onerror=function(e){console.error('Some error happen during image parsing:',e);notifyDocumentByWebStatus(false);};};detectWebpSupport();};webPChecker();