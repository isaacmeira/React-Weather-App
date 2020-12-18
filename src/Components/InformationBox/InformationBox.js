import React, { useEffect } from 'react';
import { FaTemperatureHigh, FaTemperatureLow, FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import Button from '../Button/Button';
import formatedDate from '../../Helpers/ConvertDate';
import capitalizeFirstLetter from '../../Helpers/Capitalize';

import './Styles.scss';

function InformationBox(props) {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="InformationBox">
      {props.data ? (
        <>
          <strong>{props.data.name}</strong>
          <img
            alt="Imagem do tempo"
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`}
          />

          <div className="MainContentInformation">
            <div>
              <span>{`Hoje ${formatedDate(new Date())}`}</span>
              <strong>{props.data.main.temp}°</strong>
            </div>
            <div>
              <span>
                {capitalizeFirstLetter(props.data.weather[0].description)}
              </span>
              <span>Sensação Térmica de {props.data.main.feels_like}°</span>
              <hr />
            </div>
            <div className="Conditions">
              <span>
                <FaTemperatureLow color="#22A5EA" />
                Min {props.data.main.temp_min}°
              </span>
              <span>
                {' '}
                <FaTemperatureHigh color="#C67677" />
                Max {props.data.main.temp_max}°
              </span>
              <span>
                {' '}
                <FaWind color="#fff" />
                Ventos {props.data.wind.speed} km/h
              </span>
              <span>
                {' '}
                <WiHumidity color="#22A5EA" size={28} />
                Umidade {props.data.main.humidity}%
              </span>
            </div>
            <Button execute={props.getData} label="Atualizar" />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default InformationBox;
