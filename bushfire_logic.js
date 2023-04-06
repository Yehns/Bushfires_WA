// Store our API endpoint as queryUrl.
let bushfires_url = "http://127.0.0.1:5500/Project%203/Top_100_Bushfires.geojson";

// Perform a GET request to the query URL/
d3.json(bushfires_url).then(function(data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(bushfireData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the metadata of each bushfire.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.fih_hist_distr}</h3><hr><p>Fire Location: ${(feature.properties.fih_name)}</p></h3><p>Burn Type: ${(feature.properties.fih_poly_type)}</p></h3><p> DFES Report:${(feature.properties.fih_comment)}<p>Year: ${(feature.properties.fih_year1)}</p></h5><p></p><hs><h5>Area Burnt: ${feature.properties.fih_hectares.toFixed(0)} ha`);
  }
  

  // Create a GeoJSON layer that contains the features array on the bushfires object.
  // Run the onEachFeature function once for each piece of data in the array.
  // Define the polygon colours
  let bushfires = L.geoJSON(bushfireData, {
    onEachFeature: onEachFeature,
    color: "red",
    fillColor: "red",
    stroke: 0.5
  });

console.log("100 Most Recent Bushfires", bushfireData)

// Store our API endpoint as queryUrl.
let firestations_url = "http://127.0.0.1:5500/Project%203/fire_station_districts.geojson";

// Perform a GET request to the query URL
d3.json(firestations_url).then(function(data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
  
});

function createFeatures(firestationData) {

  // Define a function that we want to run once for each feature in the features array.
  function onEachFeature(feature, layer) {
    layer.on({
      // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 40% so that it stands out.
      mouseover: function(event) {
        layer = event.target;
        layer.setStyle({
          fillOpacity: 0.4
        });
      },
      // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 20%.
      mouseout: function(event) {
        layer = event.target;
        layer.setStyle({
          fillOpacity: 0.2
        });
      },

    });

     // Give each feature a popup that describes the metadata for DFES zones
    layer.bindPopup(`<h2>${feature.properties.name}</h5><hr><p>Zone Type: ${(feature.properties.dist_type)}</p></h3><p>Hazard Management Agency: ${(feature.properties.hma)}</p><h5><p>Perimeter: ${(feature.properties.st_perimeter_shape_.toFixed(0))} meters`);
  }

  // Create a GeoJSON layer that contains the features array on the firestations object.
  // Run the onEachFeature function once for each piece of data in the array.
  let firestations = L.geoJSON(firestationData, {
    onEachFeature: onEachFeature,
    color: "blue",
    fillColor: "blue",
  });
  
console.log("DFES Zones", firestationData)
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
    "Last 100 Bushfires": bushfires,
    "DFES Zones": firestations
  };

  // Create our map, giving it the streetmap and bushfires and firestations layers to display on load.
  let myMap = L.map("map", {
    center: [
      -32, 116
    ],
    zoom: 8,
    layers: [street, bushfires, firestations]
  });

  
  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap)
}}; 
