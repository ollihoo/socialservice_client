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


/*
const L = dynamic(
  () => import('leaflet').then(mod => ), { ssr: false }
);


//  import L from 'leaflet';

delete (L.Default.prototype as any)._getIconUrl;
L.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});
*/

interface BrowsermapProps {
  cities?: City[]
}

export default function Browsermap(property: BrowsermapProps) {
  if (property.cities) {
    return (
      <MapContainer center={[51.5354, 9.920]} zoom={6} style={{height: '100%', width: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {property.cities.map((city, index) => (
          <Marker key={index} position={[city.lat, city.lon]}>
            <Popup><Link href={"dashboard?cit=" + city.id}>{city.name}</Link></Popup>

          </Marker>
        ))}
      </MapContainer>
    );
  }
  return ;
};
