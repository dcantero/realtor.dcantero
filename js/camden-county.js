var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.79235923919296, lng: -75.04125905819451 },
    zoom: 10.5,
    disableDefaultUI: true, // a way to quickly hide all controls
  });
  // Load the GeoJSON or KML file
  map.data.loadGeoJson("../geojson/gloucester-township.geojson"); // Replace with the actual path to your GeoJSON or KML file
  map.data.loadGeoJson("../geojson/active-counties.geojson"); // Replace with the actual path to your GeoJSON or KML file

  // var stateBoundaryLayer = new google.maps.KmlLayer({
  //   url: "gadm36_USA_1.kml", // Replace with the actual path to your KML file
  //   map: map,
  // });
  // Style the county borders
  map.data.setStyle(function (feature) {
    if (feature.getProperty('COUNTY_LABEL') === 'Camden County') {
      return {
        fillColor: "#5f7cd9", // Set the desired fill color for Ocean County
        strokeColor: "#5a79df",
        strokeOpacity: 0.8,
        strokeWeight: 1.2,
        fillOpacity: .15,
      };
    } else {
      return {
        visible: false // This makes other municipalities invisible
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
          color: "#171717",
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
          color: "#121212",
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
