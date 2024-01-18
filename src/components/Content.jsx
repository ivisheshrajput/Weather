import React from "react";

export default function Content() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <i className=" wi wi-night-sleet" style={iconStyle}></i>
      </div>
      <div className="card" style={cardStyle}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">City: Pune, In</li>
          <li className="list-group-item">Current Temperature: 5.42 C</li>
          <li className="list-group-item">Date:</li>
          <li className="list-group-item">Max Temp: 40C, Min Temp: 20C</li>
          <li className="list-group-item">Feels Like: 34C</li>
          <li className="list-group-item">Humidity: Pune</li>
        </ul>
      </div>
    </div>
  );
}
