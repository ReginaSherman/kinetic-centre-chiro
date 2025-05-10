import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import { useCallback, useState, useEffect } from "react";
import "../styles/map.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 33.09127406698777,
  lng: -96.92712287488574,
};

const marker_1 = {
  lat: 32.9946283,
  lng: -96.8014799,
};

const marker_2 = {
  lat: 33.161478,
  lng: -96.8318695,
};
const content = "lorem ipsum";

const options = {
  disableDefaultUI: true,
  clickableIcons: false,
  scrollwheel: false,
};

const libraries = ["places"];

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(13.2);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      map?.setZoom(12);
    }, 1000);
  }, [map]);

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        <Marker position={marker_1} label='Kinetic Centre Dallas'/>
        <Marker position={marker_2} label='Kinetic Centre Frisco'/>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
