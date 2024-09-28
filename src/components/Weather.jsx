import { useEffect, useState } from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from "react-icons/wi";

const weatherIcons = {
  clear: <WiDaySunny size={100} color="#FFD700" />,
  clouds: <WiCloudy size={100} color="#B0C4DE" />,
  rain: <WiRain size={100} color="#4682B4" />,
  snow: <WiSnow size={100} color="#00BFFF" />,
};
const getIcon = (weatherCondition) => {
  if (weatherCondition.includes("clear")) return weatherIcons.clear;
  if (weatherCondition.includes("clouds")) return weatherIcons.clouds;
  if (weatherCondition.includes("rain")) return weatherIcons.rain;
  if (weatherCondition.includes("snow")) return weatherIcons.snow;
  return weatherIcons.clear; // Default icon
};

const Weather = ({ place, province }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=${VITE_API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="w-fit max-w-screen-md bg-cyan-100/30 p-10 rounded-xl">
      {weather ? (
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-6xl font-bold">{Math.round(weather.main.temp)}°C</p>
            <p className="font-semibold mt-1 text-gray-500">{place}</p>

            <p className="text-gray-700">Humidity: {weather.main?.humidity}%</p>
            
          </div>
          <div className="">
            <p className="text-gray-700 text-center font-bold">
              {weather.weather[0].description}
            </p>
            {getIcon(weather.weather[0].main.toLowerCase())}
          </div>
        </div>
      ) : (
        <div>Weather no available</div>
      )}
    </div>
  );
};

export default Weather;
