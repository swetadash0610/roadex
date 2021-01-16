import React from 'react'
import useGeolocation from 'react-hook-geolocation'
const Location = () => {
  const geolocation = useGeolocation();
   var latlon = geolocation.latitude+ "," +geolocation.longitude;
    const link="https://maps.google.com/maps?q="+latlon+"&z=15&output=embed";

  return !geolocation.error
    ? (
    <div>
      <iframe 
      title="map"
      width="500" 
      height="170" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0" 
      src={link} >
     </iframe>
     </div>
    )
    : (
      <p>No geolocation, sorry.</p>
    )
}

export default Location;