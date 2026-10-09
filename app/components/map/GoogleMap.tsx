import type { ReactNode } from "react";
import { APIProvider, Map as GMap } from "@vis.gl/react-google-maps";

import { cn } from "~/lib/cn";
import { useSite } from "~/lib/use-site";
import { darkMapStyle } from "./map-style";

type GoogleMapProps = {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className?: string;
  children?: ReactNode;
};

/** Dark, control-free map in the site's rounded card frame. Loads the Maps script client-side only. */
export function GoogleMap({ center, zoom, className, children }: GoogleMapProps) {
  const site = useSite();
  return (
    <div
      className={cn(
        "mx-auto h-[500px] w-[80%] overflow-hidden rounded-[30px] border border-line shadow-card max-md:w-[85%]",
        className,
      )}
    >
      <APIProvider apiKey={site.googleMapsApiKey}>
        <GMap
          defaultCenter={center}
          defaultZoom={zoom}
          disableDefaultUI
          styles={darkMapStyle}
          className="h-full w-full"
        >
          {children}
        </GMap>
      </APIProvider>
    </div>
  );
}
