import React from "react";

export default function input() {

  return (
    

    <div>
      <div>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Check the Weather Forecast</p>
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
          onChange={(e)=>setSearchValue(e.target.value)}
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
  );

