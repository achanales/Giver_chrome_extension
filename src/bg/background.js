console.log('background running')

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  if (changeInfo.status == 'complete' && tab.active) {
    

   //  var dt;
   //  $.get('src/browser_action/popup.html', function (data) {
   //      dt = data;
   //      // data contains your html
   //  });
// let dt
 //   $.get('src/browser_action/popup.html', function (data) {
 //   		console
 //    	dt = $(data).find('jquery-load-point');
 //    // data contains your html
	// });


  	// 	$('#result').load('src/browser_action/popup.html #jquery-load-point', function(result) {
   //  			var data = $('#result').html();
			// });

		console.log("Events reset");
		// Send to popup
		chrome.runtime.sendMessage(
		{subject: 'reset'}
		)

  }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "startFunc") {
        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "get_data"});
            console.log('Background: pop-up click received')

        })
    }
})

chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  	if (msg.subject === 'sendHeadline') {

	    // Enable the page-action for the requesting tab.
	    console.log('headline recieved')
	    console.log(msg.headline_text)


	    let headline_to_api = {"message": msg.headline_text};

	    console.log(headline_to_api)

		// summarize and send back
		const api_url = 'https://us-central1-charityrecommender.cloudfunctions.net/recommend';

		fetch(api_url, {
	  			method: 'POST',
	  			body: JSON.stringify(headline_to_api),
	  			headers:{'Content-Type': 'application/json'} 
	  			})
		.then(r => r.text())
	 	.then(function(result) {
	 		  console.log('charities found')
	 		  console.log(result)	
	 		  result_json = JSON.parse(result);
	 		  console.log(result_json)


	 		  	// Send to popup
				chrome.runtime.sendMessage(
				{subject: 'sendCharities',
				message: result_json}
			);
	 		})
	       
	       
	  }

  });




// //reset();

// api_server = "http://67.205.138.102:8000/";

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse){
//         if(request.msg == "startFunc") sendAPIrequest();
//     }
// );

// chrome.browserAction.onClicked.addListener(function(tab) {
//     console.log('Icon clicked');
// });

// function sendAPIrequest(){

// 	// capture all text
// 	let headline = {"message": document.title};

// 	let title = document.title

// 	console.log(document.title)

// 	console.log(title)

// 	console.log(JSON.stringify(headline))

// 	// summarize and send back
// 	const api_url = 'https://us-central1-charityrecommender.cloudfunctions.net/recommend';

// 	fetch(api_url, {
//   			method: 'POST',
//   			body: JSON.stringify(headline),
//   			headers:{
//     				'Content-Type': 'application/json'
//   					} })
// 			.then(data => { return data.json() });
			
// 			console.log(data)
// 	}

// chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {

// 	var url = details.url;
// 	reset();

// 	// If en.wikipedia.org is nativaged.
// 	if (url.includes("https://en.wikipedia.org/wiki/")) {

// 		var topic = url.replace("https://en.wikipedia.org/wiki/", "");

// 		// URL for http requests
// 		var req_url = api_server + "submission/?wiki_topic=" + topic;

// 		// Send http requests
// 		fetch(req_url)
// 		.then(r => r.text())
// 		.then(function(result) {
// 			result_json = JSON.parse(result);
// 			if (result_json.found) {
// 				// Store the fetched data into local memory for display
// 				chrome.storage.local.set({events: result_json.events}, function() {
// 					console.log("Found events");
// 					// Change to colored icon
// 					chrome.browserAction.setIcon({path : "../../icons/Logo.png"});
//         		});
// 			}
// 		});
// 	}
// });