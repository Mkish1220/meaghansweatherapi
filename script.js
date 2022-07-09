var apikey = "192aa32e12efeef9298dceab17715f5a";






//search//
function search() {
    var search_text = document.getElementById("search_text").value;

    if (search_text == "") {
        alert("Please enter a search term");
        return false;
    }
    else {
        return true;
    }
}

//grab values from search to later use in our functions

//activity3 mod 6//

var submitButton = document.getElementById('searchBtn');


submitButton.addEventListener('click', function (event) {

    event.preventDefault();

    var input = document.getElementById('cityInput').value;
    currentWeather(input)
  //console.log(input)


})

function getApi() {
  // fetch request gets a forecast of the weather
  var requestUrl = '"https://api.openweathermap.org/data/2.5/direct?q="';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
    //   for (var i = 0; i < data.length; i++) {
    //     // Creating elements, tablerow, tabledata, and anchor
    //     var createTableRow = document.createElement('tr');
    //     var tableData = document.createElement('td');
    //     var link = document.createElement('a');

    //     // Setting the text of link and the href of the link
    //     link.textContent = data[i].html_url;
    //     link.href = data[i].html_url;

    //     // Appending the link to the tabledata and then appending the tabledata to the tablerow
    //     // The tablerow then gets appended to the tablebody
    //     tableData.appendChild(link);
    //     createTableRow.appendChild(tableData);
    //     tableBody.appendChild(createTableRow);
    //   }
     });
}

//fetchButton.addEventListener('click', getApi);


//grab the search content//
//activity3 mod 7//
// fetchLocation(event);
// function fetchLocation(search) {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }
//functionality for fetching weather//
//functionality for rendering content//
var todaysWeather = $("#todaysWeather");
var today = $("#today");
var fiveDay = $("#fiveDay");
var search = $("#search");
var cities = [];


var savedCities = localStorage.getItem("cities") || [];
if (savedCities.length > 0) {
    cities = savedCities;
}

 function currentWeather (city) {
     var url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`

    fetch(url)
    .then(res => res.json())
        .then((data) => {
            console.log(data)
            var card = document.createElement("div");
            var cityName = document.createElement("h3");
            var tempEl = document.createElement("p");


            cityName.textContent = data.name;
            tempEl.textContent = "Temperature: " + data.main.temp;

            card.append(cityName, tempEl);

            var renderEl = document.getElementById("currentRender");
            console.log(card)
            renderEl.append(card);


        });

        




}
 function getLocation(data) {
    console.log(data)
    // var let = data.[0].lat;
    // var lng = data.[0].lon;
    // return { lat, lon };




    var apikey =  "192aa32e12efeef9298dceab17715f5a"

  
        fetch(
            "https://api.openweathermap.org/data/2.5/wonecall?late="
            + lat
            + "&lon="
            + lon
            + "units=imperial"
            + "&appid="
        + apikey
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    }
  //  displayWeather: function (data) {
    //    return data;

     //}
