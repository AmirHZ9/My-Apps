import React from "react";
import styles from "../Styles/weather.module.css"
const Cart = ({ info }) => {
  const icon = `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`;

  return (
    <div className={styles.cart}>
        <div>

        <h1>{info.name}</h1>

       </div>
       <div className={styles.info}>
      <h2>current temp:{info.main.temp}</h2>
      <h2>{info.sys.country}</h2>
         <img src={icon} alt="weather" />
      <h2>{info.weather[0].main}</h2>
      <h3>min-temp:{info.main.temp_min}</h3>
      <h3>max-temp:{info.main.temp_max}</h3>

       </div>
    </div>
  );
};

export default Cart;
