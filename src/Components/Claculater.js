import React from "react";
import { useState } from "react";
import styles from "../Styles/calculater.module.css";
const Calculater = () => {
  const [key, setKey] = useState("");

  const display = event => {
    setKey(key + event)
  }

  const createbutton = () => {
    const button = [];
    for (let i = 1; i < 10; i++) {
      button.push(<button onClick={() => display(i.toString())} key={i}>{i}</button>);
    }
    return button;
  };
  const calculate =() => {
    if(key == ""){
      setKey('')
    }else{
      setKey(eval(key).toString())
    }
    console.log(key)
  }
  const clearall = () => {
    setKey("")
  }
  const clear = () => {
    setKey(key.substring(0, key.length - 1))
    console.log(key)
  }
  return (
    <div >
      <div className={styles.container}>
        <div className={styles.app}>
          <div className={styles.display}>
          <p>{key || "0"}</p>

          </div>

          <div className={styles.oprator}>
            <button onClick={clearall}>AC</button>
            <button onClick={clear}>C</button>
            <button onClick={() => display("%")}>%</button>
            <button onClick={() => display('/')}>/</button>
            <button onClick={() => display('*')}>*</button>
            <button onClick={() => display('+')}>+</button>
            <button onClick={() => display('-')}>-</button>
          </div>
          <div className={styles.nums}>
            {createbutton()}
            <button onClick={() => display('0')}>0</button>
            <button onClick={() => display('.')}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculater;
