// Create a map object.
let myMap = L.map("map", {
    center: [-25.27, 133.77],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array containing each Fire Station's name, location, and type
  let fireStations = [{
    location: [-34.98509769, 117.8791306],
    name: "Albany State Emergency Service Unit",
    type: 'SES',
    region: "Albany"
  },
  {
    location: [-32.13031858,116.0042718],
    name: "Armadale State Emergency Service Unit",
    type: 'SES',
    region: "Armadale"
 
  },
  {
    location: [-33.27807096, 115.7405838],
    name: "Australind State Emergency Service Unit",
    type: 'SES',
    region: "Australind"
  },
  {
    location: [-31.90344734, 115.9365048],
    name: "Bassendean State Emergency Service Unit",
    type: 'SES',
    region: "Bassendean"
  },
  {
    location: [-31.91349457, 115.9177204],
    name: "Bayswater State Emergency Service Unit",
    type: 'SES',
    region: "Bayswater"
  },
  {
    location: [-31.97229346, 115.9470026],
    name: "Belmont State Emergency Service Unit",
    type: 'SES',
    region: "Belmont"
  },
  {
    location: [-32.80274005, 116.4744815],
    name: "Boddington State Emergency Service",
    type: 'SES',
    region: "Boddington"
  },
  {
    location: [-33.9569004,116.1374605],
    name: "Bridgetown State Emergency Service Unit",
    type: 'SES',
    region: "Bridgetown"
  },
  {
    location: [-17.96487168, 122.2287181],
    name: "Broome State Emergency Service Unit",
    type: 'SES',
    region: "Broome"
  },
  {
    location: [-33.35921, 115.66776],
    name: "Bunbury State Emergency Service Unit",
    type: 'SES',
    region: "Bunbury"
  },
  {
    location: [-33.68171411, 115.3230207],
    name: "Busselton State Emergency Service Unit",
    type: 'SES',
    region: "Busselton"
  },
  {
    location: [-32.01629695, 115.924767],
    name: "Canning/South Perth State Emergency Service Unit",
    type: 'SES',
    region: "Canning/South Perth"
  },
  {
    location: [-33.35722483, 116.1505407],
    name: "Collie State Emergency Service Unit",
    type: 'SES',
    region: "Collie"
  },
  {
    location: [-24.8837612, 113.6554644],
    name: "Carnarvon State Emergency Service Unit",
    type: 'SES',
    region: "Carnarvon"
  },
  {
    location: [-32.12225855, 115.8478625],
    name: "Cockburn State Emergency Service Unit",
    type: 'SES',
    region: "Cockburn"
  },
  {
    location: [-34.96879156, 117.3528173],
    name: "Denmark State Emergency Service Unit",
    type: 'SES',
    region: "Denmark"
  },
  {
    location: [-17.30793246, 123.6490323],
    name: "Derby State Emergency Service Unit",
    type: 'SES',
    region: "Derby"
  },
  {
    location: [-33.57482703, 115.8101566],
    name: "Donnybrook State Emergency Service Unit",
    type: 'SES',
    region: "Donnybrook"
  },
  {
    location: [-29.82380376, 115.2669532],
    name: "Eneabba State Emergency Service Unit (Coastal Districts)",
    type: 'SES',
    region: "Eneabba"

  },
  {
    location: [-33.85293863, 121.8946396],
    name: "Esperance State Emergency Service Unit",
    type: 'SES',
    region: "Esperance"
  },
  {
    location: [-21.93004533, 114.1245368],
    name: "Exmouth State Emergency Service Unit",
    type: 'SES',
    region: "Exmouth"
  },
  {
    location: [-28.78676591, 114.6970787],
    name: "Geraldton / Greenough State Emergency Service Unit",
    type: 'SES',
    region: "Geraldton / Greenough"
  },
  {
    location: [-33.93787856, 118.0028949],
    name: "Gnowangerup State Emergency Service Unit",
    type: 'SES',
    region: "Gnowangerup"
  },
  {
    location: [-32.03528929, 115.9558178],
    name: "Gosnells State Emergency Service Unit",
    type: 'SES',
    region: "Gosnells"
  },
  {
    location: [-33.07931878, 115.8978602],
    name: "Harvey State Emergency Service Unit",
    type: 'SES',
    region: "Harvey"
  },
  {
    location: [-15.77608, 128.73274],
    name: "Kalamunda State Emergency Service Unit",
    type: 'SES',
    region: "Kalamunda"

  },
  {
    location: [-27.71405492, 114.1646864],
    name: "Kalbarri State Emergency Service Unit",
    type: 'SES',
    region: "Kalbarri"
  },
  {
    location: [-30.78510472, 121.4926105],
    name: "Kalgoorlie - Boulder State Emergency Service Unit",
    type: 'SES',
    region: "Kalgoorlie - Boulder"
  },
  {
    location: [-20.73335133, 116.8447212],
    name: "Karratha State Emergency Service Unit",
    type: 'SES',
    region: "Karratha"
  },
  {
    location: [-15.77654669, 128.7321637],
    name: "Kununurra State Emergency Service Unit",
    type: 'SES',
    region: "Kununurra"
  },
  {
    location: [-32.51721073, 115.7537521],
    name: "Mandurah State Emergency Service Unit",
    type: 'SES',
    region: "Mandurah"
  },
  {
    location: [-34.23915723, 116.1448951],
    name: "Manjimup State Emergency Service Unit",
    type: 'SES',
    region: "Manjimup"
  },
  {
    location: [-33.96124046, 115.0687724],
    name: "Margaret River State Emergency Service Unit",
    type: 'SES',
    region: "Margaret River"
  },
  {
    location: [-26.5886744, 118.497892],
    name: "Meekatharra State Emergency Service Unit",
    type: 'SES',
    region: "Meekatharra"
  },
  {
    location: [-32.07658892, 115.8469594],
    name: "Melville State Emergency Service Unit",
    type: 'SES',
    region: "Melville"
  },
  {
    location: [-30.63553322, 116.0123873],
    name: "Moora State Emergency Service Unit",
    type: 'SES',
    region: "Moora"
  },
  {
    location: [-31.47885568, 118.2894343],
    name: "Merredin State Emergency Service Unit",
    type: 'SES',
    region: "Merredin"
  },
  {
    location: [-26.5886744, 118.497892],
    name: "Meekatharra State Emergency Service Unit",
    type: 'SES',
    region: "Meekatharra"
  },
  {
    location: [-34.62625456, 117.6720259],
    name: "Mt Barker State Emergency Service Unit",
    type: 'SES',
    region: "Mt Barker"
  },
  {
    location: [-31.90449508, 116.1777576],
    name: "Mundaring State Emergency Service Unit",
    type: 'SES',
    region: "Mundaring"
  },
  {
    location: [-32.6138153, 115.8519149],
    name: "Murray State Emergency Service Unit",
    type: 'SES',
    region: "Murray"
  },
  {
    location: [-33.99532017, 115.7639088],
    name: "Nannup State Emergency Service Unit",
    type: 'SES',
    region: "Nannup"
  },
  {
    location: [-32.92995737, 117.180124],
    name: "Narrogin State Emergency Service Unit",
    type: 'SES',
    region: "Narrogin"
  },
  {
    location: [-23.35018584, 119.7357308],
    name: "Newman State Emergency Service Unit",
    type: 'SES',
    region: "Newman"
  },
  {
    location: [-31.65225215, 116.6785281],
    name: "Northam State Emergency Service Unit",
    type: 'SES',
    region: "Northam"
  },
  {
    location: [-31.9230968, 115.8284393],
    name: "Northshore/Perth State Emergency Service Unit",
    type: 'SES',
    region: "Northshore"
  },
  {
    location: [-32.5336907, 117.0820607],
    name: "Pingelly State Emergency Service Unit",
    type: 'SES',
    region: "Pingelly"
  },
  {
    location: [-33.5813252, 120.0453616],
    name: "Ravensthorpe State Emergency Service Unit",
    type: 'SES',
    region: ""
  },
  {
    location: [-20.38395703, 118.643401],
    name: "Port Hedland State Emergency Service Unit",
    type: 'SES',
    region: ""
  },
  {
    location: [-32.27482557, 115.7490992],
    name: "Rockingham-Kwinana State Emergency Service Unit",
    type: 'SES',
    region: "Rockingham"
  },
  {
    location: [-20.67493127, 117.1374379],
    name: "Roebourne State Emergency Service Unit",
    type: 'SES',
    region: "Roebourne"
  },
  {
    location: [-32.29757034, 115.9843639],
    name: "Serpentine / Jarrahdale State Emergency Service Unit",
    type: 'SES',
    region: "Jarrahdale"
  },
  {
    location: [-25.91968349, 113.5361488],
    name: "Shark Bay State Emergency Service Unit",
    type: 'SES',
    region: "Shark Bay"
  },
  {
    location: [-31.87702368, 115.8418554],
    name: "Stirling State Emergency Service Unit",
    type: 'SES',
    region: "Stirling"
  },
  {
    location: [-31.86705386, 116.0160502],
    name: "Swan State Emergency Service Unit",
    type: 'SES',
    region: "Swan"
  },
  {
    location: [-22.69606188, 117.7938169],
    name: "Tom Price State Emergency Service Unit",
    type: 'SES',
    region: ""
  },
  {
    location: [-31.67153858, 116.2914877],
    name: "Toodyay State Emergency Service Unit",
    type: 'SES',
    region: "Toodyay"
  },
  {
    location: [-31.47392147, 115.6517544],
    name: "Two Rocks State Emergency Service Unit",
    type: 'SES',
    region: "Two Rocks"
  },
  {
    location: [-26.13258313, 113.416249],
    name: "Useless Loop State Emergency Service Unit",
    type: 'SES',
    region: "Useless Loop"
  },
  {
    location: [-33.31123079, 117.3365618],
    name: "Wagin State Emergency Service Unit",
    type: 'SES',
    region: "Wagin"
  },
  {
    location: [-34.9745917, 116.7403356],
    name: "Walpole State Emergency Service Unit",
    type: 'SES',
    region: "Walpole"
  },
  {
    location: [-31.75101618, 115.7628103],
    name: "Wanneroo / Joondalup State Emergency Service Unit",
    type: 'SES',
    region: "Wanneroo / Joondalup"
  },
  {
    location: [-31.66635016318547, 116.03240337457073],
    name: "Bullsbrook Volunteer Fire and Emergency",
    type: 'VBFB',
    region: "Bullsbrook"
  },
  {
    location: [-31.795772239594616, 116.19142320389554],
    name: "Gidgegannup Volunteer Bush Fire",
    type: 'VBFB',
    region: "Gidgegannup"
  },
  {
    location: [-33.610947338864044, 115.09996640162524],
    name: "Dunsborough Volunteer Bush Fire Brigade ",
    type: 'VBFB',
    region: "Dunsborough"
  },
  {
    location: [-31.86718865746853, 116.01609990696038],
    name: "Swan Communications Volunteer Bush Fire Brigade",
    type: 'VBFB',
    region: "Swan"
  },
  {
    location: [-32.16641425616755, 115.88920171029845],
    name: "Jandakot Volunteer Bush Fire Brigade - CVRC",
    type: 'VBFB',
    region: "Janakot"
  },
  {
    location: [-32.20824214531091, 115.84263413611023],
    name: "Mandogalup Bush Fire Brigade",
    type: 'VBFB',
    region: "Mandogalup"
  },
  {
    location: [-34.04448671206609, 117.64218088219052],
    name: "Tambellup VFES",
    type: 'VBFB',
    region: "Tambellup"
  },
  {
    location: [-34.91661059633589, 117.12837302839357],
    name: "Owingup/Kordabup BFB",
    type: 'VBFB',
    region: "Owingup/Kordabup"
  },
  {
    location: [-33.253352589423095, 115.83734996100101],
    name: "Brunswick Junction VFRS",
    type: 'VBFB',
    region: ""
  },
  {
    location: [-31.904739469203058, 116.17787068397146],
    name: "Darling Range Bush Fire Brigade",
    type: 'VBFB',
    region: "Darling Range"
  },
  {
    location: [-32.03534386530867, 115.95581778212839],
    name: "Gosnells Volunteer Bush Fire Brigade",
    type: 'VBFB',
    region: "Gosnells"
  },
  {
    location: [-34.317823079228, 115.15855409754029],
    name: "Augusta VFRS",
    type: 'VBFB',
    region: "Augusta"
  },
  {
    location: [-31.875004518699303, 116.21476505328829],
    name: "Mount Helena Voluntary Bush Fire Brigade",
    type: 'VBFB',
    region: "Mount Helena"
  },
  {
    location: [-32.17155441421342, 116.04877541096785],
    name: "Bedfordale Volunteer Bush Fire Brigade",
    type: 'VBFB',
    region: "Bedfordale"
  },
  {
    location: [-31.38745795787908, 116.09590239745023],
    name: "Bindoon Volunteer Bushfire Brigade",
    type: 'VBFB',
    region: "Bindoon"
  },
  {
    location: [-33.8296366042097, 116.38448503875861],
    name: "Boyup Brook Volunteer Fire & Rescue ",
    type: 'VBFB',
    region: "Boyup Brook"
  },
  {
    location: [-28.86058241956406, 114.64204191087161],
    name: "Cape Burney Bush Fire Brigade",
    type: 'VBFB',
    region: "Cape Burney"
  },
  {
    location: [-31.99228139881509, 116.0721508956213],
    name: "Chittering Incident Support Brigade",
    type: 'VBFB',
    region: "Chittering"
  },
  {
    location: [-30.95277876445005, 121.16470948209626],
    name: "Coolgardie VFRS",
    type: 'VBFB',
    region: "Coolgardie"
  },
  {
    location: [-33.39779039458659, 115.7600945668291],
    name: "Dardanup Central BFB",
    type: 'VBFB',
    region: "Dardanup Central"
  },
  {
    location: [-24.85524641867346, 113.70736682753102],
    name: "Gascoyne River BFB",
    type: 'VBFB',
    region: "Gascoyne River"
  },
  {
    location: [-20.38394171645399, 118.64339912600485],
    name: "Hedland Bush Fire Brigade",
    type: 'VBFB',
    region: "Hedland"
  },
  {
    location: [-31.83406787314085, 116.58320526812682],
    name: "Inkpen Bushfire Brigade",
    type: 'VBFB',
    region: "Inkpen"
  },
  {
    location: [-32.42513064636087, 115.75738686864615],
    name: "Karnup Volunteer Fire & Emergency Services",
    type: 'VBFB',
    region: "Karnup"
  },
  {
    location: [-32.81243244248874, 115.69143153982262],
    name: "Lake Clifton Bushfire Brigade",
    type: 'VBFB',
    region: "Lake Clifton"
  },
  {
    location: [-31.020909627690262, 115.33339796860402],
    name: "Lancelin VFRS",
    type: 'VBFB',
    region: "Lancelin"
  },
  {
    location: [-33.102901044624005, 115.69696451284341],
    name: "Myalup Volunteer Bush Fire Brigade",
    type: 'VBFB',
    region: "Myalup"
  },
  {
    location: [-32.21226312373493, 115.9266646774615],
    name: "Oakford Volunteer Bushfire Brigade",
    type: 'VBFB',
    region: "Oakford"
  },
  {
    location: [-20.737277447379345, 116.84939099717705],
    name: "Pilbara Fire and Emergency Services District Office",
    type: 'VBFB',
    region: "Pilbara"
  },
  {
    location: [-28.701149790753714, 114.65056435319661],
    name: "Waggrakine Volunteer Bush Fire Brigade",
    type: 'VBFB',
    region: "Warburton"
  },
  {
    location: [-26.477745112890197, 120.2079724844853],
    name: "Wiluna Town Bush Fire Brigade",
    type: 'VBFB',
    region: "Wiluna"
  },
  {
    location: [-34.02534061753959, 115.08871707656122],
    name: "Witchcliffe Volunteer Fire & Rescue Service",
    type: 'VBFB',
    region: "Witchcliffe"
  },
  
  ];
  
  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < fireStations.length; i++) {
    let fireStation = fireStations[i];
    L.marker(fireStation.location)
      .bindPopup(`<h1>${fireStation.name}</h1> <hr> <h3>Type ${fireStation.type}</h3>`)
      .addTo(myMap);
  }
  