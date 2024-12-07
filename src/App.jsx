import "./App.css";
import WeatherCard from "./WeatherCard";
import Header from "./Header";
import { useState, useEffect } from "react";
function App() {
  const [city, setCity] = useState("");
  const [location, setlocation] = useState({ lat: "None", lon: "None" });
  const [locationLabel, setlocationLabel] = useState("");
  const [weatherParams, setWeatherParams] = useState({
    key: "AFFZB77E898BEZM4QPMAR2P46",
    lat: "",
    lon: "",
    lang: "en",
    unit: "metric",
  });
  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setlocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        error => {
          if (error.code === error.PERMISSION_DENIED) {
            console.error("User denied the request for Geolocation.");
            setlocation({
              lat: 28.6139,
              lon: 77.2088, // Default location (e.g., Delhi)
            });
          } else {
            console.error(
              "An error occurred while fetching the location:",
              error.message
            );
          }
        }
      );
    };
    getLocation();
  }, []);
  useEffect(() => {
    console.log("city updated");
    fetch(
      `https://api.geoapify.com/v1/geocode/search?city=${city}&apiKey=67e7ef78464c4c2b816a2125a721827d`
    )
      .then(response => response.json())
      .then(result =>
        setlocation({
          lat: result.features[0].properties.lat,
          lon: result.features[0].properties.lon,
        })
      )
      .catch(error => console.log("error", error));
  }, [city]);

  return (
    <div className='p-4'>
      <Header setCity={setCity} />
      <WeatherCard
        weatherParams={weatherParams}
        locationLabel={locationLabel}
        location={location}
        setlocationLabel={setlocationLabel}
        setWeatherParams={setWeatherParams}
      />
    </div>
  );
}

export default App;
