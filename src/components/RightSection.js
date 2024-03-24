import React from "react";

const RightSection = ({ information }) => {
  //const pressure = information?.main?.pressure;
  if (!information || !information.main) {
    // Render a loading indicator while data is being fetched
    return (
      <div className="w-8/12 bg-gray-100 p-8 flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  const {
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    sea_level,
    grnd_level,
  } = information?.main;
  const { speed, deg, gust } = information?.wind;
  const { sunrise, sunset } = information?.sys;
  const { visibility } = information;

  let date1 = new Date(sunrise * 1000); // Convert seconds to milliseconds
  let timeStr1 = `${date1.getHours().toString()}:${date1
    .getMinutes()
    .toString()}`;
  let date2 = new Date(sunset * 1000);
  let timeStr2 = `${date2.getHours().toString()}:${date2
    .getMinutes()
    .toString()}`;
  console.log(information, "aaaaaaaaaaaaaaa");
  return (
    <div className="w-8/12 bg-gray-100 p-8 space-y-5 min-h-screen  ">
      <div className="mt-5 text-2xl tracking-wider space-x-4">
        <span>Today</span>
      </div>
      <div className="mt-24   grid grid-cols-3 grid-rows gap-y-12  justify-items-center text-white">
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-5 space-y-2  ">
          <div>Wind</div>
          <div className="text-xl font-semibold">Speed: {speed} m/s</div>
          <div className="text-xl font-semibold">Deg: {deg} </div>
          <div className="text-xl font-semibold">Gust: {gust} </div>
        </div>

        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-8 space-y-5   ">
          <div>Humidity</div>
          <div className="text-3xl font-semibold">{humidity} %</div>
        </div>

        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-8 space-y-5  ">
          <div>Feels Like</div>
          <div className="text-3xl font-semibold">{feels_like} °C</div>
        </div>
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-8 space-y-3  ">
          <div>Visibility</div>
          <div className="text-3xl font-semibold">{visibility}</div>
        </div>
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-8 space-y-5  ">
          <div>Pressure</div>
          <div className="text-3xl font-semibold">{pressure} hPa</div>
        </div>
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-8 space-y-5  ">
          <div>Ground Level</div>
          <div className="text-3xl font-semibold">{grnd_level}</div>
        </div>
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-8 space-y-5  ">
          <div>Sea Level</div>
          <div className="text-3xl font-semibold">{sea_level}</div>
        </div>
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-7 space-y-5  ">
          <div className="text-2xl font-semibold">
            <span className="text-xl">Sunrise: </span>
            {timeStr1} AM
          </div>
          <div className="text-2xl font-semibold">
            {" "}
            <span className="text-xl">Sunset: </span>
            {timeStr2} PM
          </div>
        </div>
        <div className="w-[250px] h-[170px] hover:w-[245px] hover:h-[165px] bg-[#748bf1] rounded-2xl p-7 space-y-5  ">
          <div className="text-2xl font-semibold">
            <span className="text-lg">Temp Max: </span>
            {temp_max} °C
          </div>
          <div className="text-2xl font-semibold">
            {" "}
            <span className="text-lg">Temp Min: </span>
            {temp_min} °C
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
