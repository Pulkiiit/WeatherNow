import "./App.css";
import WeatherCard from "./WeatherCard";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [city, setCity] = useState("New Delhi");

  return (
    <>
      <Header setCity={setCity} />
      <WeatherCard city={city} />
    </>
  );
}

export default App;
