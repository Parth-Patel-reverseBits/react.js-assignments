import { useState } from "react";
import geoLocation from "../../hooks/geoLocation";
import Button from "../Atoms/Button";

const GeoLocation = () => {
  const [Latitude, setLatitude] = useState(0);
  const [Longitude, setLongitude] = useState(0);

  const ShowCordinates = () => {
    geoLocation().then((data) => {
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    });
  };

  return (
    <div className="h-screen w-full">
      <h1 className="pt-20 text-center font-bold text-4xl">
        Check your geolocation
      </h1>
      <div className="text-black text-center gap-20 mt-20">
        <div>Latitude: {Latitude}</div>
        <div>Longitude: {Longitude}</div>
      </div>
      <div className="flex justify-center mt-20">
        <Button onClick={ShowCordinates}>{"Check"}</Button>
      </div>
    </div>
  );
};

export default GeoLocation;
