import React, { useEffect } from "react";

export default function CardboxBottom({ tempInfo }) {
  const {
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
  } = tempInfo;

  const [weatherState, setWeatherState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Thunderstorm":
          setWeatherState("wi-lightning");
          break;
        case "Drizzle":
          setWeatherState("wi-hail");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        case "Snow":
          setWeatherState("wi-snow");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Smoke":
          setWeatherState("wi-dust");
          break;
        case "Haze":
          setWeatherState("wi-day-sunny");
          break;
        case "Fog":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Clouds":
          setWeatherState("wi-cloud");
          break;
        default:
          setWeatherState("wi-day-cloudy");
          break;
      }
    }
  }, [weathermood]);

  let date1 = new Date(sunrise * 1000); // Convert seconds to milliseconds
  let timeStr1 = `${date1
    .getHours()
    .toString()}:${date1.getMinutes().toString()}`;
  let date2 = new Date(sunset * 1000);
  let timeStr2 = `${date2
    .getHours()
    .toString()}:${date2.getMinutes().toString()}`;

  const cardStyle = {
    width: "18rem"
  };
  const iconStyle = {
    fontSize: "10rem"
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card w-100">
        <div className="card-body">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <i className={`wi ${weatherState}`} style={iconStyle}></i>
            </div>
            <div className="card" style={cardStyle}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  City: {city}, {country}
                </li>
                <li className="list-group-item">
                  Current Temperature: {temp}&deg;C
                </li>
                <li className="list-group-item">
                  Sunrise: {timeStr1} AM <br />
                  Sunset: {timeStr2} PM
                </li>
                <li className="list-group-item">
                  MaxTemp: {temp_max}&deg;C <br />
                  MinTemp: {temp_min}&deg;C
                </li>
                <li className="list-group-item">
                  Feels Like: {feelsTemp}&deg;C
                </li>
                <li className="list-group-item">Humidity: {humidity}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
