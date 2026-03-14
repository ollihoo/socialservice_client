'use client';

import 'leaflet/dist/leaflet.css';
import {City} from "@/lib/definitions";
import Link from "next/link";
import dynamic from 'next/dynamic'

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker), { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup), { ssr: false }
);

interface BrowsermapProps {
  cities?: City[]
}

function createMarker (city: City, index: number ) {
  if (city.lat && city.lon)
    return (
      <Marker key={index} position={[city.lat, city.lon]}>
        <Popup><Link href={"dashboard?cit=" + city.id}>{city.name}</Link></Popup>

      </Marker>
    );
  else return;
}

export default function Browsermap(property: BrowsermapProps) {
  if (property.cities) {
    return (
      <MapContainer center={[51.5354, 9.920]} zoom={6} style={{height: '100%', width: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {property.cities.map((city, index) => createMarker(city, index))}
      </MapContainer>
    );
  }
  return ;
};
