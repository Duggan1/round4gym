// Facility.js
import React, { useState, useEffect } from "react";
import turf from './turf.jpeg';
import Matt from './Matt.jpeg';
import weights from './weights.jpeg';
import logo4 from './logo4.webp';

export default function Facility() {
  const [R4Images, setR4Images] = useState(Matt);

  useEffect(() => {
    const images = [Matt, turf,weights ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setR4Images(images[index]);
    }, 4000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div style={{ borderRadius: '20%', marginLeft: '2%', marginRight: '2%', marginTop: '4%' }}>
      <center style={{ borderRadius: '20%', width: '100%', height: '400px', backgroundImage: `url(${logo4})`, backgroundSize: '100% 100%' }}>
        <div style={{ borderRadius: '0%', width: '95%', height: '400px', backgroundImage: `url(${R4Images})`, backgroundSize: '100% 100%', border:'5px solid #01b7f0' ,borderRadius:'15%' }}>
          {/* <GoogleMapsHelp/> */}
        </div>
      </center>
    </div>
  );
}
