import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ locations }) => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  return (
    <MapContainer
      center={[43.791592, -79.350014]}
      zoom={10}
      style={{ height: "98%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => {
        const key = Object.keys(location)[0];
        return (
          <Marker key={index} position={[location[key].lat, location[key].lng]}>
            <Popup>{key}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
