Handlebars.registerHelper('stripesHelper',function(index,cssClassOdd,cssClassEven){if((index%2)==0){return cssClassOdd;}else{return cssClassEven;}});Handlebars.registerHelper('lastRowHelper',function(index,obj){var result='';if(index+1==(obj.hash.data.length)){result=' last';}
return result;});Handlebars.registerHelper('for',function(from,to,incr,block){var result='';for(var i=from;i<to;i+=incr){result+=block.fn(i);}
return result;});Handlebars.registerHelper('ifCond',function(v1,v2,options){if(v1===v2){return options.fn(this);}
return options.inverse(this);});Handlebars.registerHelper('decimal',function(number){return number.replace(/,|\./g,'');});Handlebars.registerHelper('minimum_elements',function(x,n,block){var accum='';for(var i=0;i<x-n;++i)
accum+=block.fn(i);return accum;});Handlebars.registerHelper('itemInfoExtrasLists',function(content,obj){var result='';var i,j,row,chunk=4;var cl,entry;result+='<ul class="info-cont list-wrap">\n';for(i=0,j=content.length;i<j;i+=chunk){row=content.slice(i,i+chunk);if(row.length){for(var k=0;k<4;k++){cl=k%2?'t-rigth':'t-left';if(row[k]){entry=row[k];cl+=' '+(entry.class||'')+' '+(entry.type=="text"?"":" global")
result+='<li class="additional-bonus-item '+cl+'" aria-label="'+entry.title+': '+entry.value+'" tabindex="0">\n'+
'<div class="title">'+entry.title+':</div>\n'+
'<div class="desc '+(entry.descColor||'')+'" '+
(entry.descTitle?'title="'+entry.descTitle+'"':'')+'>\n';if(entry.type=="text"){if(entry.icon)
result+='<i class="'+entry.icon+'"></i> ';result+=entry.value;}else{result+='<div class="bar-wrap '+entry.color+' left">\n'+
'<div class="bar-gray-wrap">\n<div class="bar-gray"></div>\n</div>\n'+
'<div class="bar-wrap" style="width: '+entry.width+'%">\n'+
'<div class="bar"></div>\n'+
'</div>\n'+
'</div>\n';}
result+='</div>\n'+
'<div class="clear"></div>\n'+
'</li>\n\r';}else{if(k>1)cl+=' t-hide';result+='<li class="'+cl+'"></li>\n'}}}}
result+='<li class="clear"></li></ul>\n';return result;});Handlebars.registerHelper('itemInfoAdditionalLists',function(content,obj){var result='';var i,j,row,chunk=2
var cl,entry;result+='<ul class="additional-info clearfix">\n';for(i=0,j=content.length;i<j;i+=chunk){row=content.slice(i,i+chunk);if(row.length){for(var k=0;k<4;k++){cl=k%2?'rigth':'left';if(k==3)cl+=' last';if(row[k]){entry=row[k];result+='<li class="'+cl+'">\n\r'+
'<span class="icon-wrap small">'+
'<i class="'+entry.icon+'"></i>'+
'</span>'+
'<span class="desc">'+
'<div class="title">'+entry.title+':</div>';if(entry.type=="text"){result+='<i class="'+entry.icon+'"></i>'+entry.value;}else{result+='<div class="bar-wrap '+entry.color+' left">\n'+
'<div class="bar-gray-wrap">\n<div class="bar-gray"></div>\n</div>\n'+
'<div class="bar-wrap" style="width: '+entry.width+'%">\n'+
'<div class="bar"></div>\n'+
'</div>\n'+
'</div>\n';}
result+='</span>';result+='</li>\n\r';}else{result+='<li class="'+cl+'"></li>\n\r'}}}}
result+='<li class="clear"></li></ul>\n';return result;});