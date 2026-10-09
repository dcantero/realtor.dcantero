import { GeoJsonLayers } from "./GeoJsonLayers";
import { GoogleMap } from "./GoogleMap";

const CENTER = { lat: 39.79235923919296, lng: -75.04125905819451 };
const ZOOM = 10.5;

const LAYERS = ["/geojson/gloucester-township.geojson", "/geojson/active-counties.geojson"] as const;

const style: google.maps.Data.StylingFunction = (feature) => {
  if (feature.getProperty("COUNTY_LABEL") === "Camden County") {
    return { fillColor: "#5f7cd9", strokeColor: "#5a79df", strokeOpacity: 0.8, strokeWeight: 1.2, fillOpacity: 0.15 };
  }
  return { visible: false };
};

export function CamdenCountyMap({ className }: { className?: string }) {
  return (
    <GoogleMap center={CENTER} zoom={ZOOM} className={className}>
      <GeoJsonLayers urls={LAYERS} style={style} />
    </GoogleMap>
  );
}
