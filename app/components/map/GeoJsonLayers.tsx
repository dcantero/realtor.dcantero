import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";

type GeoJsonLayersProps = {
  /** Absolute paths under /public/geojson. Pass a module-level constant so the effect runs once. */
  urls: readonly string[];
  style: google.maps.Data.StylingFunction;
};

/** Loads GeoJSON files into the map's data layer and styles them. */
export function GeoJsonLayers({ urls, style }: GeoJsonLayersProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const layer = map.data;
    layer.setStyle(style);
    for (const url of urls) layer.loadGeoJson(url);
    return () => {
      layer.forEach((feature) => layer.remove(feature));
    };
  }, [map, urls, style]);

  return null;
}
