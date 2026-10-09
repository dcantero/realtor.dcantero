import { GeoJsonLayers } from "./GeoJsonLayers";
import { GoogleMap } from "./GoogleMap";

const CENTER = { lat: 40.0583, lng: -74.4057 };
const ZOOM = 9;

const LAYERS = [
  "/geojson/active-counties.geojson",
  "/geojson/atlantic-county.geojson",
  "/geojson/ocean-county.geojson",
  "/geojson/NJ-boundry.geojson",
] as const;

const PARTIAL_COUNTIES = new Set(["Atlantic County", "Ocean County"]);

const style: google.maps.Data.StylingFunction = (feature) => {
  const label = feature.getProperty("COUNTY_LABEL");
  if (typeof label === "string" && PARTIAL_COUNTIES.has(label)) {
    return { fillColor: "#2a396b", strokeColor: "#2e3f77", strokeOpacity: 0.8, strokeWeight: 2 };
  }
  if (label === "New Jersey") {
    return { fillColor: "#121212", strokeColor: "#FFF", strokeOpacity: 0.3, strokeWeight: 2 };
  }
  return { strokeColor: "#5572d0", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#7e9cfe", fillOpacity: 0.1 };
};

/** Home-page map of the counties served, with partially served counties shaded darker. */
export function ServiceAreaMap({ className }: { className?: string }) {
  return (
    <GoogleMap center={CENTER} zoom={ZOOM} className={className}>
      <GeoJsonLayers urls={LAYERS} style={style} />
    </GoogleMap>
  );
}
