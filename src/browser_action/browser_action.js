
chrome.runtime.sendMessage({ "message" : "startFunc" });


chrome.runtime.onMessage.addListener((msg, sender) => {
	if (msg.subject === 'reset'){
		console.log("resetting popup")

		chrome.browserAction.setPopup({popup: "src/browser_action/popup.html"});
  		window.location.href="src/browser_action/popup.html";
		// chrome.runtime.getBackgroundPage(function(bg){
		// 	document.body.innerHTML = "src/browser_action/popup.html"
		// 	console.log(document.body.innerHTML)
  //             setInterval(function(){
  //   		bg.sessionDataHTML = document.body.innerHTML
  // 			},1000);  

		// })
	}
})

chrome.runtime.getBackgroundPage(function(bg){
  if(bg.sessionDataHTML){
  	console.log(bg)
    document.body.innerHTML = bg.sessionDataHTML; 
  }
  setInterval(function(){
    bg.sessionDataHTML = document.body.innerHTML
  },1000);    

  chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
    if (msg.subject === 'sendCharities') {
        

		console.log('charities recieved')
		console.log(msg)

         // Get the event_list container
        let charity_list = document.getElementById("charity_list");

        let charities_json = msg.message

        console.log(charities_json)

        let names = [charities_json[0]['name'], charities_json[1]['name'],charities_json[2]['name']]
        let scores = [charities_json[0]['score'], charities_json[1]['score'],charities_json[2]['score']]
        let links = [charities_json[0]['link'], charities_json[1]['link'],charities_json[2]['link']]
        let subcats = [charities_json[0]['subcategory'], charities_json[1]['subcategory'],charities_json[2]['subcategory']]

        console.log(names)
        console.log(scores)
        console.log(links)

        var i;
        for (i = 0; i < names.length; i++) {

              if (i === 2) {
              	var elmnt = document.createElement("li")
              } else{
              	var elmnt = document.createElement("li")
              }
              var elmnt = document.createElement("div")
              elmnt.setAttribute("class", "charity");

              // Obtain the event name, venue and link.
              var charity_name =names[i];
              var charity_link = links[i];
              var charity_score = scores[i];
              var charity_subcat = subcats[i];

              console.log(charity_name)
              console.log(charity_link)
              console.log(charity_score)

              document.getElementsByClassName('default')[0].innerHTML  = "You might consider donating to the following charities";

              // Container for the event score.
              var score = document.createElement("div");
              score.innerHTML = 'Score: '.concat(charity_score);
              score.setAttribute("class", "charityinfo");

              var subcat = document.createElement("div");
              subcat.innerHTML = 'Category: '.concat(charity_subcat);
              subcat.setAttribute("class", "charityinfo");

              var name = document.createElement("div");
			  name.innerHTML = charity_name;
              name.setAttribute("class", "name");


              var link = document.createElement("div");
			  link.setAttribute("class", "link");

              var link_ref = document.createElement("a");
              // Open a blank tab when the link is clicked.
              link_ref.innerHTML = 'Donate';
              link_ref.setAttribute("target", "_blank");
              link_ref.setAttribute("href", 'https://'.concat(charity_link));

              link.appendChild(link_ref)

              // Put the score and link to the element
              elmnt.appendChild(name);
              elmnt.appendChild(subcat);
              elmnt.appendChild(score);
              elmnt.appendChild(link);

              // Append the new element to the list.
              charity_list.appendChild(elmnt);              

                }



      }
    });
})

 

//   console.log('popup ready')

//   var data = { 'charities': [
//                                   { "name":"Planned Parenthood", 
//                                   "score": "Score: 90", 
//                                   "link":"https://www.google.com/search?q=planned+parenthood"
//                                   },
      
//                                   { "name":"Planned Parenthood 2", 
//                                   "score": "Score: 80", 
//                                   "link":"https://www.google.com/search?q=planned+parenthood"
//                                   }
                              
//                             ]
//                       };
//   //data = {charities: [result_json}


//     // If the data is updated
//   if(typeof(data.charities) !== "undefined") {

//     charity_list.innerHTML = "";
//     console.log(data)

//       // Generate list for each event entry
//      data.charities.forEach(function(charity){
        
//         // Check if the element is the last one. Use a different css style if true.
//         //if (idx === (array.length - 1)) {
//         //var elmnt = document.createElement("ul")
//         //} //else {
//           var elmnt = document.createElement("li")
//         //}
//         console.log(elmnt)
//         console.log(charity)

//         // Obtain the event name, venue and link.
//         var charity_name = charity.name;
//         var charity_link = charity.link;
//         var charity_score = charity.score;

//         console.log(charity_name)
//         console.log(charity_link)
//         console.log(charity_score)

//         // Container for the event venue.
//         var div = document.createElement("div");
//         div.innerHTML = charity_score;
//         div.setAttribute("class", "score");

//         var a = document.createElement("a");

//         a.innerHTML = charity_name;
//         // Open a blank tab when the link is clicked.
//         a.setAttribute("target", "_blank");
//         a.setAttribute("href", charity_link);

//         // Put the event venue and link to the element
//         elmnt.appendChild(div);
//         elmnt.appendChild(a);

//         // Append the new element to the list.
//         charity_list.appendChild(elmnt);

//       })
//     }
// };

