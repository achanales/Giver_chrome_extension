
chrome.runtime.sendMessage({ "message" : "startFunc" });

// function load() {
chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
    if (msg.subject === 'sendCharities') {
        

         // Get the event_list container
        let charity_list = document.getElementById("charity_list");

        let charities_json = msg.result_json

        let names = [charities_json[0]['name'], charities_json[1]['name'],charities_json[2]['name']]
        let scores = [charities_json[0]['scores'], charities_json[1]['scores'],charities_json[2]['scores']]
        let links = [charities_json[0]['subcategory'], charities_json[1]['subcategory'],charities_json[2]['subcategory']]

        console.log(names)
        console.log(scores)
        console.log(links)

        var i;
        for (i = 0; i < names.length; i++) {
                
              var elmnt = document.createElement("ul")

              // Obtain the event name, venue and link.
              var charity_name =names[i];
              var charity_link = links[i];
              var charity_score = scores[i];

              // Container for the event venue.
              var div = document.createElement("div");
              div.innerHTML = charity_score;
              div.setAttribute("class", "score");

              var a = document.createElement("a");

              a.innerHTML = charity_name;
              // Open a blank tab when the link is clicked.
              a.setAttribute("target", "_blank");
              a.setAttribute("href", charity_link);

              // Put the event venue and link to the element
              elmnt.appendChild(div);
              elmnt.appendChild(a);

              // Append the new element to the list.
              charity_list.appendChild(elmnt);              

                }



      }
    });
 

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

