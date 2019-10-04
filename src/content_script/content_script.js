
chrome.runtime.onMessage.addListener(
	function(msg, sender, response) {
		if (msg.message === "get_data") {
			console.log('I made it in')

			// Get Headling from document title
			//let headline = document.title;

			//console.log(headline)

			//let html = document.body.innerHTML

			//jsondata = jQuery('html').ogp()

			//let description = document.querySelectorAll('meta[property="og:description"]')[0]['content']

			let headline = document.querySelectorAll('meta[property="og:title"]')[0]['content']

			//let headline = title.concat(' ', description)


			console.log(headline)
			// Send to background
			chrome.runtime.sendMessage(
				{subject: 'sendHeadline',
				headline_text: headline}
			);

		}
	})

// console.log("Chrome Extension Ready to Go!");




// // Inform the background page that 
// // this tab should have a page-action.

// 




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





