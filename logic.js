
let myMap = L.map("map", {
  center: [39.83, -98.58], 
  zoom: 5
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
}).addTo(myMap); 

var myIcon = L.icon.glyph({
  prefix: 'mdi', // Specify the icon prefix (e.g., 'mdi' for Material Design Icons)
  glyph: 'package', // Specify the icon name (e.g., 'package')
  
  markerColor: 'blue', // Customize the marker color
});


