function CoreWebsocketHandler(options){var self=this;this.actions={};this.namespaces={};this.messageData={};this.options=options;this.credentials=null;this.subscription=null;this.eventListeners=[];this.init=function(){if(self.credentials){return self.subscribe(self.credentials)}
self.runCredentialsCheck();}
this.runCredentialsCheck=function(){if(document.readyState!=='loading'){self.setCredentials();}else{document.addEventListener('DOMContentLoaded',function(){self.setCredentials();});}}
this.setCredentials=function(){try{var websocketConnectionDataElement=document.getElementById('websocketConnectionData');self.credentials=JSON.parse(websocketConnectionDataElement.innerText);self.subscribe(self.credentials)}catch(e){getAction({type:'post',action:'/websocket.php',data:{q:'initWebsocketConnection'},success:function(credentials){self.credentials=credentials
self.subscribe(credentials)}});}}
this.subscribe=function(credentials){if(!credentials||!credentials.url||!credentials.userID||!credentials.token){return false;}
var centrifuge=new Centrifuge(credentials.url+"/connection/websocket");centrifuge.setToken(credentials.token);var channel=(self.options&&self.options.channel)?self.options.channel:credentials.channel
self.subscription=centrifuge.subscribe(channel,function(resp){var data=resp.data.message;if(!data){return false;}
self.setMessageData(data);self.checkAndRunActions();});centrifuge.connect();}
this.checkAndRunActions=function(){var data=self.getMessageData();if(data.namespaces){self.runMultipleActions()}
else if(data.namespace&&self.namespaces[data.namespace]&&self.namespaces[data.namespace][data.action]){self.namespaces[data.namespace][data.action](data);}
else if(self.actions[data.action]){self.actions[data.action](data);}
else{console.warn&&console.warn("Undefined action '"+data.action+"' in WebsocketHandler");}
self.unsetMessageData();}
this.runMultipleActions=function(){var data=self.getMessageData();var namespaces=data.namespaces;if(!namespaces){return false;}
for(var namespaceKey in namespaces){var namespace=namespaces[namespaceKey];for(var actionKey in namespace.actions){var actionData=namespace.actions[actionKey];if(self.namespaces[namespaceKey]&&self.namespaces[namespaceKey][actionKey]){self.namespaces[namespaceKey][actionKey](actionData);}
self.triggerEventListeners(namespaceKey,actionKey,actionData);}}}
this.getMessageData=function(){return self.messageData;}
this.setMessageData=function(data){self.messageData=data;}
this.unsetMessageData=function(){self.messageData={};}
this.getCredentials=function(){return self.credentials;}
this.addEventListener=function(namespace,action,callback){self.eventListeners.push({namespace:namespace,action:action,callback:callback})}
this.removeEventListener=function(namespace,action,callback){self.eventListeners=self.eventListeners.filter(function(listener){return listener.namespace!==namespace||listener.action!==action||listener.callback!==callback});}
this.triggerEventListeners=function(namespace,action,data){self.eventListeners.map(function(listener){if(listener.namespace===namespace&&listener.action===action&&typeof listener.callback==='function'){listener.callback(data);}});}
this.init();}
var commonCoreWebsocketHandler=new CoreWebsocketHandler();function WebsocketHandler(namespace,options){var customCoreWebsocketHandler;if(options&&options.channel){customCoreWebsocketHandler=new CoreWebsocketHandler({channel:options.channel});}
var self=this;this.namespace=namespace||'default';this.namespaces=customCoreWebsocketHandler?customCoreWebsocketHandler.namespaces:commonCoreWebsocketHandler.namespaces;this.namespaces[this.namespace]={};this.actions=customCoreWebsocketHandler?customCoreWebsocketHandler.actions:commonCoreWebsocketHandler.actions;this.setActions=function(actions){for(var name in actions){self.namespaces[self.namespace][name]=actions[name];}}
this.getCredentials=function(){return commonCoreWebsocketHandler.getCredentials();}}
WebsocketHandler.addEventListener=function(namespace,action,callback){commonCoreWebsocketHandler.addEventListener(namespace,action,callback);};(function(){var commonWebsocketHandler=new WebsocketHandler('common');commonWebsocketHandler.setActions({exampleAction:function(data){console.log('exampleAction action. Data: ',data);}})})();