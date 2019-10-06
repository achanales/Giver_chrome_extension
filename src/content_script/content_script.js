
chrome.runtime.onMessage.addListener(
	function(msg, sender, response) {
		if (msg.message === "get_data") {
			console.log('I made it in')

			// Get headline

			let headline = document.querySelectorAll('meta[property="og:title"]')[0]['content']

			// Grab all paragraphs in article

			let article = document.querySelectorAll('p')
			let articleLength = article.length

			// Loop over each paragraph and concatenate text
			let articleText = '';
			for (var i = 0; i < articleLength; i++) {
    			articleText = articleText.concat(' ',article[i]['innerText']);
    			console.log(article[i]['innerText'])
				}

			console.log(articleText)


			console.log(headline)
			// Send to background
			chrome.runtime.sendMessage(
				{subject: 'sendHeadline',
				headline_text: headline,
				article_text: articleText}
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





