
import React, { useRef } from 'react';

interface CityMapProps {
  city: string;
  mapHeight?: string;
  markerPosition?: number[];
  className?: string;
}

const CityMap: React.FC<CityMapProps> = ({ city, mapHeight = "400px", markerPosition, className }) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className || ''}`}>
      <iframe 
        ref={mapRef}
        width="100%" 
        height={mapHeight}
        style={{ border: 0 }}
        loading="lazy" 
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(city)}`}
        title={`Map of ${city}`}
      ></iframe>
    </div>
  );
};

export default CityMap;
