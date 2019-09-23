console.log("Chrome Extension Ready to Go!");




// Inform the background page that 
// this tab should have a page-action.

headline = document.getElementsByClassName("c-page-title")[0].innerHTML;

chrome.runtime.sendMessage(
	{subject: 'sendHeadline',
	headline_text: headline}
);

// Listen for messages from the popup.
//chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
//  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data. 

    

    // Directly respond to the sender (popup), 
    // through the specified callback.
//    response(headline);
//  }
//});

var headline = document.getElementsByClassName("c-page-title")[0].innerHTML;

console.log(headline)

