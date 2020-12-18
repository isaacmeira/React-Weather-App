import axios from 'axios';

async function getWeather(lat, lon) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );

  return response.data;
}

export default getWeather;
