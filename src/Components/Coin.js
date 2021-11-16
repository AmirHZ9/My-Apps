import React from 'react';
import styles from "../Styles/crypto.module.css"
const Coin = ({coindata}) => {
    return (
        <div className={styles.container}>
            <img src={coindata.image} alt="coin" />
            <span>{coindata.name}</span>
            <span className={styles.symbol}>{coindata.symbol}</span>
            <span className={coindata.price_change_24h > 0 ? styles.green : styles.red}>{coindata.price_change_24h}</span>
            <span>{coindata.current_price} $</span>
        </div>
    );
};

export default Coin;