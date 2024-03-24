import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const LeftSection = ({ information }) => {
  // const information = useWeather("manali"); // Pass the city name as a string
  if (!information || !information.main) {
    // Render a loading indicator while data is being fetched
    return (
      <div className="w-4/12 bg-gray-200 p-8 flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  const temp = information.main?.temp; // Access temp property safely
  const environment = information.weather?.[0]?.main;
  const name = information.name;
  const { country } = information.sys;

  let icon;
  switch (environment) {
    case "Clear":
      icon = faSun;
      break;
    case "Clouds":
      icon = faCloud;
      break;
    case "Rain":
      icon = faCloudRain;
      break;
    case "Snow":
      icon = faSnowflake;
      break;
    default:
      icon = faCloudSun;
  }

  // Convert Unix timestamp to milliseconds
  const timestampInMillis = information.dt * 1000;
  // Create a new Date object with the timestamp
  const date = new Date(timestampInMillis);
  // Get the various date components
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();

  // Extracting timezone offset in seconds
  const timezoneOffsetSeconds = information.timezone;
  // Converting timezone offset to hours and minutes
  const timezoneOffsetHours = Math.floor(
    Math.abs(timezoneOffsetSeconds) / 3600
  );
  const timezoneOffsetMinutes = Math.floor(
    (Math.abs(timezoneOffsetSeconds) % 3600) / 60
  );
  // Constructing timezone string
  const timezone = `UTC${
    timezoneOffsetSeconds >= 0 ? "+" : "-"
  }${timezoneOffsetHours}:${timezoneOffsetMinutes.toString().padStart(2, "0")}`;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return (
    <div className="w-4/12 p-5">
      <div className="p-10 flex flex-col justify-center items-center">
        <div className="my-10">
          {" "}
          <FontAwesomeIcon icon={icon} size="10x" />
        </div>

        <div className="text-6xl mt-3 mb-2">{temp} °C</div>
        <div className="mb-10">{environment}</div>

        <div className="mt-10 mb-1 text-sm">{formattedDate}</div>
        <div className="mb-1">{timezone}</div>
        <div className="text-4xl text-gray-400 mt-10">
          {name}, {country}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
