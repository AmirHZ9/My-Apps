import React, { useContext, useState } from 'react';
import Coin from './Coin';
import { digitalcoin } from './CryptoContext';
import styles from "../Styles/crypto.module.css"
const Coins = () => {

    const Coins  = useContext(digitalcoin)
    const [search , setSearch]= useState('')
    const changehandler = event  => {
        setSearch(event.target.value)
    }
    const searchcoin = Coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) )
    return (
        <div className={styles.main}>
            <input type="text" placeholder="Search" value={search} onChange={changehandler} />
            {
                searchcoin.map(item => <Coin key={item.id} coindata={item} />)
            }
        </div>
    );
};

export default Coins;