"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Jennipher Medina
      Date:   5-5-2025  

      Filename: project11-02.js
*/

//get elements by their id
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");


postalCode.onblur = function() {
 
      //declare variable
      let codeValue = postalCode.value
      let countryValue = country.value

      place.value = "";
      region.value = "";

      //sends request to zip url
      fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)

      //parses the json response
      .then(response => response.json())

      .then(json => {
            place.value =json.places[0]["place name"];
            region.value = json.places[0]["state abbreviation"]
      })

      .catch(console.log("failed"))
}



