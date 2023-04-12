let url1 = "http://127.0.0.1:5000/api/v1.0/coords2021"
let url2 = "http://127.0.0.1:5000/api/v1.0/coords2020"

var fireIcon = L.icon({
  iconUrl: 'fire01.png',

  iconSize: [19, 46], // size of the icon
  iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var fireIcon2 = L.icon({
  iconUrl: 'fire02.png',

  iconSize: [19, 46], // size of the icon
  iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let layer21 = [];
let layer20 = [];



d3.json(url1).then(function (data) {
  let markers21 = L.marker();

  // Loop through the data.
  for (let i = 0; i < data.length; i++) {

    // Set the data location property to a variable.
    let location = data[i];
    let values = location[0].split(",")
    let values0 = values[0].replace('[', '')
    let values1 = values[1].replace(']', '')
    let values00 = values0.replace(' ', '')
    let values11 = values1.replace(' ', '')
    let lat = parseFloat(values11);
    let lng = parseFloat(values00);

    // console.log(lat,lng)

    // // add marker to a layer, and bind a popup.
    layer21.push(L.marker([lat, lng]
      , {icon: fireIcon}
      )
      .bindPopup(`<p>Year: ${location[1]}</p> <p>Date:: ${location[2]}</p> <p>Season: ${location[3]}</p> <p>District: ${location[4]}</p> <p>Coordinates: ${lat},${lng}</p>`)
    //.addTo(myMap);
)}
});


d3.json(url2).then(function (data2) {
  let markers20 = L.marker();
  for (let i = 0; i < data2.length; i++) {

    // Set the data location property to a variable.
    let location2 = data2[i];
    let values2 = location2[0].split(",")
    let values20 = values2[0].replace('[', '')
    let values21 = values2[1].replace(']', '')
    let values200 = values20.replace(' ', '')
    let values211 = values21.replace(' ', '')
    let lat2 = parseFloat(values211);
    let lng2 = parseFloat(values200);
    // console.log(lat2,lng2)
    // add marker to a layer, and bind a popup.
    layer20.push(
      L.marker([lat2, lng2]
        , {icon: fireIcon2}
      )
        .bindPopup(`<p>Year: ${location[1]}</p> <p>Date:: ${location[2]}</p> <p>Season: ${location[3]}</p> <p>District: ${location[4]}</p> <p>Coordinates: ${lat2},${lng2}</p>`)
    )//.addTo(myMap);
  }
});
console.log(layer20)
console.log(layer21)

  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap)
}}; 


// Adding a tile layer (the background map image) to our map:
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

let fires_2020 = L.layerGroup(layer20);
let fires_2021 = L.layerGroup(layer21);

console.log(fires_2020)
console.log(fires_2021)

// Create a baseMaps object.
let baseMaps = {
  'Street Map': street,
  "Topographic Map": topo
};

// Overlays that can be toggled on or off
let overlayMaps = {
  '2020 fires': fires_2020,
  '2021 fires': fires_2021
};

console.log(overlayMaps)

// create map
let myMap = L.map("map", {
  center: [-26.25, 119.37],
  zoom: 6,
  layers: [street, fires_2020, fires_2021]
});


