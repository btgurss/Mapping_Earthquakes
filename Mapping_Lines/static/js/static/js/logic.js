//Add console.log to ehck to see if our code is working.
console.log("working")

//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.0997, -94.5783], 5);

//Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    atrribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [30.2667, -97.7333],
    [39.0997, -94.5783],
    [43.651, -79.347],
    [40.7306, -73.9352]

  ];
  

  L.polyline(line, {
      color: "blue",
      weight: 4,
      opacity: 0.5,
      dashArray: (2,5)
  }).addTo(map);
  // Loop through the cities array and create one marker for each city.
/*cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "orange"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});*/

//Add our 'graymap tile layer to the map
streets.addTo(map);