import ReactWeather, { useVisualCrossing } from "react-open-weather";
import { useEffect, useState } from "react";
const WeatherCard = ({ city }) => {
  const [location, setlocation] = useState({ lat: "None", lon: "None" });
  const [locationLabel, setlocationLabel] = useState("");
  const [weatherParams, setWeatherParams] = useState({
    key: "AFFZB77E898BEZM4QPMAR2P46",
    lat: "28.6139",
    lon: "77.2088",
    lang: "en",
    unit: "metric",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      location => {
        setlocation({
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
      },
      error => {
        if (error.code === error.PERMISSION_DENIED) {
          console.error("User denied the request for Geolocation.");
          setlocation({
            lat: 28.6139,
            lon: 77.2088,
          });
        } else {
          console.error(
            "An error occurred while fetching the location:",
            error.message
          );
        }
      }
    );
  }, []);

  useEffect(() => {
    if (location.lat !== "") {
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lon}&apiKey=67e7ef78464c4c2b816a2125a721827d`
      )
        .then(response => response.json())
        .then(result => {
          setlocationLabel(result.features[0].properties.city);
          console.log(result);
        })
        .catch(error => console.log("error", error));
    }
  }, [location]);

  useEffect(() => {
    if (location.lat !== "" && locationLabel) {
      setWeatherParams({
        key: "AFFZB77E898BEZM4QPMAR2P46",
        lat: location.lat,
        lon: location.lon,
        lang: "en",
        unit: "metric",
      });
    }
  }, [location, locationLabel]);

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

  const { data, isLoading, errorMessage } = useVisualCrossing(weatherParams);
  return (
    <>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        locationLabel={locationLabel}
        unitsLabel={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </>
  );
};

export default WeatherCard;
