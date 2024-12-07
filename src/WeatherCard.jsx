/* eslint-disable react/prop-types */
import ReactWeather, { useVisualCrossing } from "react-open-weather";
import { useEffect } from "react";
const WeatherCard = ({
  weatherParams,
  locationLabel,
  location,
  setlocationLabel,
  setWeatherParams,
}) => {
  useEffect(() => {
    if (location.lat !== "") {
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lon}&apiKey=67e7ef78464c4c2b816a2125a721827d`
      )
        .then(response => response.json())
        .then(result => {
          setlocationLabel(result.features[0].properties.city);
        })
        .catch(error => console.log("error", error));
    }
  }, [location, setlocationLabel]);
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
  }, [location, locationLabel, setWeatherParams]);
  const { data, isLoading, errorMessage } = useVisualCrossing(weatherParams);
  console.log("weatehr data", data);
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
