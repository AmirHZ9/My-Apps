import axios from "axios"
const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
export const getcoin = async () => {
    const response = await axios.get(api_url)
    return response.data;
}