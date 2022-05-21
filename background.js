console.log("Loaded extension");


function blockRequest(details) {

	var block=is_block(0,7);
	if(block){
		return {cancel: true};
	}

   return {cancel: false};
}

var block_list=["*://*.facebook.com/*", "*://*.facebook.net/*", "*://*.prothomalo.com/*"];


function is_block(allow_start_minute, allow_end_minute){
	//if current minute is in between, then block=false;
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    if(h == '0') {h = 24}
    var data= h+' '+m; 

    var block=true;

    if (m>=allow_start_minute && m<allow_end_minute){
      block=false;
    } 
   return block;
}
 

function updateFilters(urls) {


   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: block_list}, ['blocking']);
}

updateFilters();


 chrome.runtime.onMessage.addListener(         //receive double clicked word. after google showed meaning. 
  (request, sender, sendResponse) => {
	  //alert("sender="+request.message); 
	 if(request.message.startsWith("__popup__echo")){
	//alert("loading");
	 }else{ 
	 console.log("newword="+request.message);
		 var last_word=request.message;
	 }
  });
  
  