import React from "react";
function App() {
  const [temperature, setTemperature] = React.useState(10);
  const [temperatureColor, setTemperatureColor] = React.useState("cold");
  function increaseTemp() {
    if (temperature === 50) return;
    let newTemp = temperature + 1;
    if (newTemp >= 30) {
      setTemperatureColor("hot");
    }
    setTemperature(newTemp);
  }
  function decreaseTemp() {
    if (temperature === 0) return;
    let newTemp = temperature - 1;
    if (newTemp < 30) {
      setTemperatureColor("cold");
    }
    setTemperature(newTemp);
  }
  return (
    <div className="App">
      <div className={`display-temp ${temperatureColor}`}>{temperature}°C</div>
      <div className="display-button">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
}

export default App;
