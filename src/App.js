import { useState } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Search from "./components/Search";
import useWeather from "./hooks/useWeather";

function App() {
  const [initialCity, setFinalCity] = useState("");
  const information = useWeather(initialCity);
  const handleSearchLocation = (location) => {
    setFinalCity(location);
  };
  return (
    <>
      {initialCity ? (
        <div>
          <Search onSearch={handleSearchLocation} />
          <div className="flex">
            <LeftSection information={information} />
            <RightSection information={information} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-[#748bf1]">
          <div>
            <Search onSearch={handleSearchLocation} />
            <div className="mt-4">
              <video
                autoPlay
                loop
                muted
                width="640"
                height="360"
                className="rounded-lg"
              >
                <source
                  src={require("./utils/WeatherBackground.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="-mt-8 ml-2 font-semibold text-lg text-white">
                Enter the City for Weather Information
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
