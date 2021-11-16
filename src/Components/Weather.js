import React, { useState } from "react";
import axios from "axios";
import Cart from "./Cart";
const apikey = "b5059294560b5866fe87215862487b19";

//style
import styles from "../Styles/weather.module.css";

const Weather = () => {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState([]);
  const changehandler = (event) => {
    setName(event.target.value);
  };

  const addcity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metric`;
    await axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setWeather([...weather, data]));
      setName("")
  };

  return (
    <div className={styles.container}>
      <input type="text" value={name} onChange={changehandler} placeholder="City"/>
      <button onClick={addcity}>submit</button>
      <div className={styles.main}>
        {weather.map((item) => (
          <Cart key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
