import React, { useState } from "react";

export default function CardboxTop({ setTempInfo }) {
  const [searchValue, setSearchValue] = useState("Pune");

  const getWeatherInfo = async () => {
    const API_KEY = "4d7105a81991bf662e773a41729d22b9";

    const apiCityName = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`;
    try {
      const dataCity = await fetch(apiCityName);
      const fullDataCity = await dataCity.json();
      const {
        feels_like: feelsTemp,
        humidity,
        temp,
        temp_max,
        temp_min
      } = fullDataCity.main;
      const city = fullDataCity.name;
      const { country, sunrise, sunset } = fullDataCity.sys;
      const { main: weathermood } = fullDataCity.weather[0];

      const newWeatherInfo = {
        feelsTemp,
        humidity,
        temp,
        temp_max,
        temp_min,
        city,
        country,
        weathermood,
        sunrise,
        sunset
      };
      setTempInfo(newWeatherInfo);
    } catch (err) {
      alert("Please check the City. It is Invalid!!!");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card w-100 mb-3">
        <div className="card-body">
          <div>
            <div>
              <figure className="text-center">
                <blockquote className="blockquote">
                  <h2>Weather Forecast</h2>
                </blockquote>
              </figure>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                aria-label="Enter City"
                aria-describedby="button-addon2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={getWeatherInfo}
              >
                Check Weather
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
