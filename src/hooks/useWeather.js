import toast from "react-hot-toast";
import { API_KEY } from "../utils/constant";
import { useEffect, useState } from "react";

const useWeather = (searchValue) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    getWeather();
  }, [searchValue]); // Add searchValue to dependency array

  const getWeather = async () => {
    // Correct function declaration
    try {
      const weatherInfo = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`
      );
      const jsonWeather = await weatherInfo.json();
      setWeatherData(jsonWeather);
    } catch (err) {
      toast.error("Please Enter A Valid City");
    }
  };

  return weatherData; // Move return statement outside of the getWeather function
};

export default useWeather;
