import axios from "axios"
const api_url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5059294560b5866fe87215862487b19&units=metric`
export const getweather = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyapi}&units=metric`)
    return response;
}