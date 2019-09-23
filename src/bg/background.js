console.log('background running')


chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if (msg.subject === 'sendHeadline') {
    // Enable the page-action for the requesting tab.
    console.log('message recieved')
    console.log(msg.headline_text)
  }
});

function reset (){

	// set the icon to greyscale 
	chrome.browserAction.setIcon({path : "../../icons/icon19.png"});

	// clean the local storage
	//chrome.storage.local.clear(function () {
	//	console.log("Events reset");
	//});
}

//reset();

// Add a listenser when DOM is loaded.
//chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {

//	var url = details.url;
	//reset();

	// If vox is nativaged.
//	if (url.includes("https://www.vox.com/")) {
//            chrome.browserAction.setIcon({path : "../../icons/get_started16.png"});
 //       }
//});