
chrome.runtime.sendMessage({ "message" : "startFunc" });


chrome.runtime.onMessage.addListener((msg, sender) => {
	if (msg.subject === 'reset'){
		console.log("resetting popup")
	}
})

 

  chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
    if (msg.subject === 'sendCharities') {
        

		console.log('charities recieved')
		console.log(msg)

         // Get the event_list container
        let charity_list = document.getElementById("charity_list");

        let charities_json = msg.message

        console.log(charities_json[0]['keywords'])

        console.log(charities_json)

        let names = [charities_json[0]['name'], charities_json[1]['name'],charities_json[2]['name']]
        let scores = [charities_json[0]['score'], charities_json[1]['score'],charities_json[2]['score']]
        let links = [charities_json[0]['link'], charities_json[1]['link'],charities_json[2]['link']]
        let subcats = [charities_json[0]['subcategory'], charities_json[1]['subcategory'],charities_json[2]['subcategory']]
        let descriptions = [charities_json[0]['description'], charities_json[1]['description'],charities_json[2]['description']]

        console.log(names)
        console.log(scores)
        console.log(links)

        var i;
        for (i = 0; i < names.length; i++) {

              var elmnt = document.createElement("div")
              elmnt.setAttribute("class", "charity");

              // Obtain the charity ifno.
              var charity_name =names[i];
              var charity_link = links[i];
              var charity_score = scores[i];
              var charity_subcat = subcats[i];
              var charity_description = descriptions[i];

              console.log(charity_name)
              console.log(charity_link)
              console.log(charity_score)


              // Change the header text
              document.getElementsByClassName('default')[0].innerHTML  = "You might consider donating to the following charities";

              // Container for the charity score.
              var score = document.createElement("div");
              score.innerHTML = 'Transparency Rating: '.concat(charity_score);
              score.setAttribute("class", "charityinfo");

              // Container for the subcategory
              var subcat = document.createElement("div");
              subcat.innerHTML = 'Category: '.concat(charity_subcat);
              subcat.setAttribute("class", "charityinfo");

              // Conatiner for name + dropdown
              var name = document.createElement("button");
			        name.innerHTML = charity_name;
              name.setAttribute("class", "name");

              var panel = document.createElement("div");
              panel.setAttribute("class", "panel");

              var par = document.createElement("p"); 
              var textnode = document.createTextNode(charity_description); 

              par.appendChild(textnode)
              panel.appendChild(par)


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
              elmnt.appendChild(panel);
              elmnt.appendChild(subcat);
              elmnt.appendChild(score);
              elmnt.appendChild(link);

              // Append the new element to the list.
              charity_list.appendChild(elmnt);              

                }

                var acc = document.getElementsByClassName("name");
                var i;

                for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  /* Toggle between adding and removing the "active" class,
                  to highlight the button that controls the panel */
                  this.classList.toggle("active");

                  /* Toggle between hiding and showing the active panel */
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });

            }
        }
    });


 