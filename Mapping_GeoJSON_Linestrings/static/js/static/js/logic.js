//Add console.log to ehck to see if our code is working.
console.log("working")

//Create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    atrribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark]
  });

let baseMaps = {
    "Day Navigation": light,
    "Night Navigation": dark
};

// Add GeoJSON data.
let torontoData = "https://raw.githubusercontent.com/btgurss/Mapping_Earthquakes/main/torontoRoutes.json"

//Grabbing our GeoJSon data
/*L.geoJSON(sanFranAirport, {
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country)
    }
}).addTo(map);*/

//Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2,
}
d3.json(torontoData).then(function(data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3>Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
});
    
    //Creating a FeoJSON layer with the retrieved data.
 /*   L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name);
         }    
        }).addTo(map);
});
L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name);
     }
}).addTo(map);
  // Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "orange"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});*/

//Add our 'graymap tile layer to the map
L.control.layers(baseMaps).addTo(map);