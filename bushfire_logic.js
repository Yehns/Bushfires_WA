// Creating the map object

let myMap = L.map("map", {
  center: [-31.953512, 115.857048],
  zoom: 9
});

// Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // Use this link to get the GeoJSON data.
  let bushfires_link = "http://127.0.0.1:5500/Project%203/Top_100_Bushfires.geojson";

  // Getting our GeoJSON data
  d3.json(bushfires_link).then(function(bushfire_data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(bushfire_data).addTo(myMap);
  });

let firestations_link = "http://127.0.0.1:5500/Project%203/fire_station_districts.geojson"

d3.json(firestations_link).then(function(firestation_data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(firestation_data).addTo(myMap);
});

function createMap(earthquakes) {

  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  let overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}