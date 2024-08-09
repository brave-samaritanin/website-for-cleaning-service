import React from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import './ServiceAreaMap.css';

const serviceAreaBoundary = [
  { lat: 39.2126, lng: -84.5373 },
  { lat: 39.1443, lng: -84.4131 },
  { lat: 39.0942, lng: -84.5206 },
  { lat: 39.1300, lng: -84.5555 },
  { lat: 39.2126, lng: -84.5373 },
];

const mapContainerStyle = {
  height: '100vh',
  width: '100%',
};

const center = {
  lat: 39.1084,
  lng: -84.5056,
};

const ServiceAreaMap = () => {
  return (
    <div>
      <h2 className="map-title">Service Areas</h2>
      <div className="map-container"> 
        <LoadScript googleMapsApiKey="AIzaSyBME6kqFmOWD983V1FnJKfmlGa74rzIfvU">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
            <Polygon
              paths={serviceAreaBoundary}
              options={{
                fillColor: 'rgba(0, 0, 255, 0.2)',
                strokeColor: 'blue',
                strokeOpacity: 1,
                strokeWeight: 2,
                clickable: false,
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
