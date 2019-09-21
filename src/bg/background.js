// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
//chrome.extension.onMessage.addListener(
//  function(request, sender, sendResponse) {
//  	chrome.pageAction.show(sender.tab.id);
//    sendResponse();
//  });

function reset (){

	// set the icon to greyscale 
	chrome.browserAction.setIcon({path : "../../icons/icon19.png"});

	// clean the local storage
	//chrome.storage.local.clear(function () {
	//	console.log("Events reset");
	//});
}

reset();

// Add a listenser when DOM is loaded.
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {

	var url = details.url;
	reset();

	// If en.wikipedia.org is nativaged.
	if (url.includes("https://www.vox.com/")) {
            chrome.browserAction.setIcon({path : "../../icons/get_started16.png"});
        }
});