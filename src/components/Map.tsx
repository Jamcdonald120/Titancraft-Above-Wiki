import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const imageUrl = '/docs/map.png';
  const bounds: [[number, number], [number, number]] = [[0, 0], [1000, 1000]]; // Adjust bounds as needed

  return (
    <MapContainer center={[500, 500]} zoom={1} style={{ height: '400px', width: '100%' }}>
      <ImageOverlay url={imageUrl} bounds={bounds} />
    </MapContainer>
  );
};

export default MapComponent;