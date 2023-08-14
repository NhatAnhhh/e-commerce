import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';

const StyledMainContact = styled.div`
  height: 700px;
  padding-top: 200px;
  font-size: 100px;
  padding-bottom: 70px;
  padding-left: 50px;
  padding-right: 50px;
`;

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

export const Contact = () => {
  // const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.error('Trình duyệt không hỗ trợ Geolocation.');
    }
  }, []);

  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log('Vĩ độ: ' + latitude);
    console.log('Kinh độ: ' + longitude);
  }

  return (
    <StyledMainContact>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_MAP_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </StyledMainContact>
  );
};
