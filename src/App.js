import React, { useEffect, useState } from "react";
import "./App.css"
import Svg from "./Compontents/Svg"

const date = new Date();
export default function App() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <div className="Time">
        <span className="Horas"> {dateTime.hours}</span>:<span className="Minutos">{dateTime.minutes}</span>:<span className="segundos">{dateTime.seconds}</span>
      </div>
      <Svg />
    </div>
  );
}