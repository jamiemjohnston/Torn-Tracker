/*! jQuery ellipsis - v1.1.0 - 2013-11-26
* https://github.com/STAR-ZERO/jquery-ellipsis
* Copyright (c) 2013 Kenji Abe; Licensed MIT */(function($){$.fn.ellipsis=function(options){var defaults={'row':1,'onlyFullWords':false,'char':'...','callback':function(){},'position':'tail','responsive':false};options=$.extend(defaults,options);this.each(function(){var $this=$(this);if(options.responsive&&!$(this).next().hasClass('t-origin')){$this.after('<span class="t-origin" style="display: none;">'+$this.html()+'</span>');}
if(options.responsive){$this.text($this.next('.t-origin').text());}
var text=$this.text();var origText=text;var origLength=origText.length;var origHeight=$this.height();$this.text('a');var lineHeight=parseFloat($this.css("lineHeight"),10);var rowHeight=$this.height();var gapHeight=lineHeight>rowHeight?(lineHeight-rowHeight):0;var targetHeight=gapHeight*(options.row-1)+rowHeight*options.row;if(origHeight<=targetHeight){$this.text(text);options.callback.call(this);return;}
var start=1,length=0;var end=text.length;if(options.position==='tail'){while(start<end){length=Math.ceil((start+end)/2);$this.text(text.slice(0,length)+options['char']);if($this.height()<=targetHeight){start=length;}else{end=length-1;}}
text=text.slice(0,start);if(options.onlyFullWords){text=text.replace(/[\u00AD\w\uac00-\ud7af]+$/,'');}
text+=options['char'];}else if(options.position==='middle'){var sliceLength=0;while(start<end){length=Math.ceil((start+end)/2);sliceLength=Math.max(origLength-length,0);$this.text(origText.slice(0,Math.floor((origLength-sliceLength)/2))+
options['char']+
origText.slice(Math.floor((origLength+sliceLength)/2),origLength));if($this.height()<=targetHeight){start=length;}else{end=length-1;}}
sliceLength=Math.max(origLength-start,0);var head=origText.slice(0,Math.floor((origLength-sliceLength)/2));var tail=origText.slice(Math.floor((origLength+sliceLength)/2),origLength);if(options.onlyFullWords){head=head.replace(/[\u00AD\w\uac00-\ud7af]+$/,'');}
text=head+options['char']+tail;}
$this.text(text);options.callback.call(this);});return this;};})(jQuery);