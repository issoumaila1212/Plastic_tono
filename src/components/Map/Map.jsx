import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 17,
  lng: -3,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAVCJpQFCtODkzMqMxLi-5QRYAmhzm0az0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}  // Niveau de zoom pour afficher Bamako et ses environs
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
