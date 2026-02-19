'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {City} from "@/lib/definitions";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface CityMapComponentProps {
  cities: City[];
}

const Browsermap: React.FC<CityMapComponentProps> = ( { cities }) => {
  return (
    <MapContainer center={[51.5354, 9.920]} zoom={6} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      ( if (cities[0].lat && cities[0].lng) (
          <Marker position={[cities[0].lat, cities[0].lon]}>
            <Popup>{cities[0].name}</Popup>
          </Marker>
        )
      )
      <Marker position={[cities[0].lat, cities[0].lon]}>
        <Popup>{cities[0].name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Browsermap;