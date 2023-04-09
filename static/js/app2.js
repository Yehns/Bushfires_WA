let url1 = "http://127.0.0.1:5000/api/v1.0/coords"

d3.json(url1).then(function(data) {
    let markers = L.marker();
      let myMap = L.map("map", {
    center: [-31.9523,115.8613],
    zoom: 7,
   });
  
    // Adding a tile layer (the background map image) to our map:
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(myMap);
  
      
      // Loop through the data.
      for (let i = 0; i < data.length; i++) {
  
      // Set the data location property to a variable.
          let location = data[i];
          console.log(location)
          let values = location[0].split(",")
          console.log(values[0])
          console.log(values[1])
          let values0 = values[0].replace('[','')
          let values1 = values[1].replace(']','')
          let values00 = values0.replace(' ','')
          let values11 = values1.replace(' ','')
          let lat = parseFloat(values11);
          let lng = parseFloat(values00);

          console.log(lat,lng)
          console.log(typeof lat)
          console.log(typeof lng)
        // Check for the location property.
          // if (location) {
        // Add a new marker to the cluster group, and bind a popup.
        L.marker(lat,lng).addTo(myMap);
        // .bindPopup(`<p>Year: ${location[1]}</p> <p>Date:: ${location[2]}</p> <p>Season: ${location[3]}</p> <p>District: ${location[4]}</p> <p>Coordinates: ${location[0]}</p>`)
        

    }});