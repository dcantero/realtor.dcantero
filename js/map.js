var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.0583, lng: -74.4057 },
    zoom: 10,
  });
  // Load the GeoJSON or KML file
  map.data.loadGeoJson("county-boundries.geojson"); // Replace with the actual path to your GeoJSON or KML file

  // Style the county borders
  map.data.setStyle({
    strokeColor: "#FFF", // Example stroke color
    strokeOpacity: 0.8, // Example stroke opacity
    strokeWeight: 2, // Example stroke weight
    fillColor: "#121212", // Example fill color
  });
}