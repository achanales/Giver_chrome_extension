function load() {

   // Get the event_list container
  var charity_list = document.getElementById("charity_list");

  console.log('popup ready')

  var data = { 'charities': [
                                  { "name":"Planned Parenthood", 
                                  "score": "Score: 90", 
                                  "link":"https://www.google.com/search?q=planned+parenthood"
                                  },
      
                                  { "name":"Planned Parenthood 2", 
                                  "score": "Score: 80", 
                                  "link":"https://www.google.com/search?q=planned+parenthood"
                                  }
                              
                            ]
                      };
  //data = {charities: [result_json}


    // If the data is updated
  if(typeof(data.charities) !== "undefined") {

    charity_list.innerHTML = "";
    console.log(data)

      // Generate list for each event entry
     data.charities.forEach(function(charity){
        
        // Check if the element is the last one. Use a different css style if true.
        //if (idx === (array.length - 1)) {
        //var elmnt = document.createElement("ul")
        //} //else {
          var elmnt = document.createElement("li")
        //}
        console.log(elmnt)
        console.log(charity)

        // Obtain the event name, venue and link.
        var charity_name = charity.name;
        var charity_link = charity.link;
        var charity_score = charity.score;

        console.log(charity_name)
        console.log(charity_link)
        console.log(charity_score)

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

      })
    }
};


// Trigger the function when DOM of the pop-up is loaded.
document.addEventListener('DOMContentLoaded', function() {

  load();

});