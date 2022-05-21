
var words=[];
document.addEventListener('DOMContentLoaded', function() {

chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  sendServiceRequest(selection[0]);
}); 


function sendServiceRequest(selectedText) {
   
}

 

  var checkPageButton = document.getElementById('search');
  checkPageButton.addEventListener('click', function() {
 
    chrome.tabs.getSelected(null, function(tab) {
      d = document; 
		 chrome.tabs.query({active:true},function(tabs){ 
			chrome.tabs.sendMessage(tab.id, { data: '__popup__' }, (response) => {
        console.log(response);
    }); 	
        });   

    });
	
  }, false);
  
 
  
    var tButton = document.getElementById('test');
    tButton.addEventListener('click', function() {
		//alert('test');
       //getUserID();
	    

    });
	
  
  
  
}, false);

