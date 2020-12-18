import React, { useEffect, useState } from 'react';

import './Styles.scss';
import getWeather from '../../Services/GetWeather';
import NoLocation from '../../Components/NoLocation/NoLocation';
import InformationBox from '../../Components/InformationBox/InformationBox';

export default function Main() {
  const [userLocation, setLocation] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        setLocation(position);
      }
    });
  }, []);

  async function getData() {
    const { latitude, longitude } = userLocation.coords;

    const response = await getWeather(latitude, longitude);
    setData(response);

    return response;
  }

  return (
    <div className="MainGrid">
      {getData}
      {userLocation ? (
        <InformationBox getData={getData} data={data} />
      ) : (
        <NoLocation />
      )}
    </div>
  );
}
