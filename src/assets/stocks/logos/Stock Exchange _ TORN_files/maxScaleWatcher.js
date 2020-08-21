function MaxScaleWatcher(){var VIEWPORT_SELECTOR='meta[name="viewport"]'
var CONTENT_ATTRIBUTE='content'
var ZOOM_RULE='maximum-scale=1'
var ADAPTIVE_MODE_FLAG='r'
var self=this
self._getMeta=function(){var viewportNode=document.head.querySelector(VIEWPORT_SELECTOR);var viewportContent=viewportNode.getAttribute(CONTENT_ATTRIBUTE);return{viewportNode:viewportNode,viewportContent:viewportContent};}
self._deactivateZoom=function(){var viewportNode=self._getMeta().viewportNode;var viewportContent=self._getMeta().viewportContent;var deactiveZoom=viewportContent+', '+ZOOM_RULE;viewportNode.setAttribute(CONTENT_ATTRIBUTE,deactiveZoom);}
self._activateZoom=function(){var viewportNode=self._getMeta().viewportNode;var viewportContent=self._getMeta().viewportContent;var zoomPattern=new RegExp('('+ZOOM_RULE+')','i');var activateZoom=viewportContent.replace(zoomPattern,'');viewportNode.setAttribute(CONTENT_ATTRIBUTE,activateZoom);}
self._checkIsManualDesktopModeOff=function(){var isManualDesktopModeNotSet=document.body.classList.contains(ADAPTIVE_MODE_FLAG);return isManualDesktopModeNotSet}
self._checkIsViewportZoomDeactivated=function(){var viewportContent=self._getMeta().viewportContent;var zoomPattern=new RegExp('('+ZOOM_RULE+')');var isZoomDeactivated=!zoomPattern.test(viewportContent);return isZoomDeactivated;}
self.run=function(){if(self._checkIsManualDesktopModeOff()&&self._checkIsViewportZoomDeactivated()){self._activateZoom();}
self._deactivateZoom();}};var startMaxScaleWatcher=new MaxScaleWatcher();document.addEventListener('DOMContentLoaded',startMaxScaleWatcher.run);