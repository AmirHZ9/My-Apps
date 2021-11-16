import React, { createContext, useEffect, useState } from 'react';
import { getcoin } from '../services/Api';
export const digitalcoin = createContext()
const CryptoContext = ({children}) => {
    const [data , setData] = useState([])

    useEffect(() => {
        const fetch_api = async () => {
            setData(await getcoin())
        
        }

        fetch_api()
    })
    return (
        <digitalcoin.Provider value={data}>
            {children}
        </digitalcoin.Provider>
    );
};

export default CryptoContext;