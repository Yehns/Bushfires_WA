// Store our API endpoint as queryUrl.
let bushfires_url = "http://127.0.0.1:5500/Project%203/Top_100_Bushfires.geojson";

// Perform a GET request to the query URL/
d3.json(bushfires_url).then(function(data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(bushfireData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h2>${feature.properties.fih_year1}</h3><hr><p>${(feature.properties.fih_poly_type)}</p><hr><hs><h2>${feature.properties.fih_comment}</h3></hr><hr><p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let bushfires = L.geoJSON(bushfireData, {
    onEachFeature: onEachFeature
  });

  // Send our earthquakes layer to the createMap function/
  createMap(bushfires);
}

// Store our API endpoint as queryUrl.
let firestations_url = "http://127.0.0.1:5500/Project%203/fire_station_districts.geojson";

// Perform a GET request to the query URL/
d3.json(firestations_url).then(function(data1) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data1.features);
});

function createFeatures(firestationData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h2>${feature.properties.fih_year1}</h3><hr><p>${(feature.properties.fih_poly_type)}</p><hr><hs><h2>${feature.properties.fih_comment}</h3></hr><hr><p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let firestations = L.geoJSON(firestationData, {
    onEachFeature: onEachFeature
  });

  // Send our earthquakes layer to the createMap function/
  createMap(firestations);
}

function createMap(allData) {

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
    "Last 100 Bushfires" : allData
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  let myMap = L.map("map", {
    center: [
      -32, 116
    ],
    zoom: 8,
    layers: [street, allData]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}


// let bushfires_link = "http://127.0.0.1:5500/Project%203/Top_100_Bushfires.geojson";
// let firestations_link = "http://127.0.0.1:5500/Project%203/fire_station_districts.geojson"
