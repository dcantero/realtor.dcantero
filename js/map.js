var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.0583, lng: -74.4057 },
    zoom: 9,
    disableDefaultUI: true, // a way to quickly hide all controls
  });

  // Load the GeoJSON or KML file
  map.data.loadGeoJson("./geojson/active-counties.geojson"); // Replace with the actual path to your GeoJSON or KML file
  map.data.loadGeoJson("./geojson/atlantic-county.geojson"); // Load the second county boundaries
  map.data.loadGeoJson("./geojson/ocean-county.geojson"); // Load the third county boundaries
  map.data.loadGeoJson("./geojson/NJ-boundry.geojson"); // Load the third county boundaries

  // var stateBoundaryLayer = new google.maps.KmlLayer({
  //   url: "gadm36_USA_1.kml", // Replace with the actual path to your KML file
  //   map: map,
  // });
  // Style the county borders
  map.data.setStyle(function (feature) {
    var countyName = feature.getProperty("COUNTY_LABEL");

    if (countyName === "Atlantic County") {
      return {
        fillColor: "#2a396b", // Set the desired fill color for Ocean County
        strokeColor: "#2e3f77",
        strokeOpacity: 0.8,
        strokeWeight: 2,
      };
    } else if (countyName === "Ocean County") {
      return {
        fillColor: "#2a396b", // Set the desired fill color for Ocean County
        strokeColor: "#2e3f77",
        strokeOpacity: 0.8,
        strokeWeight: 2,
      };
    } else if (countyName === "New Jersey") {
      return {
        fillColor: "#121212", // Set the desired fill color for Ocean County
        strokeColor: "#FFF",
        strokeOpacity: 0.3,
        strokeWeight: 2,
      };
    } else {
      return {
        strokeColor: "#5572d0", // Example stroke color
        strokeOpacity: 0.8, // Example stroke opacity
        strokeWeight: 2, // Example stroke weight
        fillColor: "#7e9cfe", // Example fill color
        fillOpacity: ".1",
      };
    }
  });
  // // Style the state boundary
  // stateBoundaryLayer.addListener("defaultviewport_changed", function () {
  //   stateBoundaryLayer.setOptions({
  //     strokeColor: "blue", // Set the desired stroke color for the state boundary
  //     strokeOpacity: 1,
  //     strokeWeight: 9,
  //     fillOpacity: 9,
  //   });
  // });

  // Define your custom map style JSON object
  var customStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#949494",
        },
      ],
    },
    {
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#121212",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#121212",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3e414f",
        },
        {
          weight: 8,
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#242824",
        },
      ],
    },
    {
      featureType: "landscape.natural.landcover",
      stylers: [
        {
          color: "#141514",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      stylers: [
        {
        "visibility": "off"
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#1a1a1a",
        },
        {
          saturation: -5,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      stylers: [
        {
          visibility: "off",
          color: "#474747",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          color: "#121212",
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          color: "#1e202f",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#181d25",
        },
      ],
    },
  ];

  // Apply the custom map style
  map.setOptions({ styles: customStyle });
}
