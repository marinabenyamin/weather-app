import React, { useState } from 'react'
import axios from 'axios'
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import { useLoaderData } from 'react-router';

export default function WeatherApp() {
    const [weather, setWeather] = useState(
        {
            wind: 0,
            humidity: 0,
            temp: 0,
            name: '',
        });
    const [wicon, setWicon]=useState(cloud_icon);
    const data = useLoaderData();
    console.log(data)
    
    const search = async (e) => {
        const location = e.target.value;
       // const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1b41380eb980e6d0675655a7cf59416c`);
        //const data = await resp.json();
        console.log(location);
        try {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1b41380eb980e6d0675655a7cf59416c`);
            const data = resp.data;
            // console.log(marina);
            console.log(data);
            if (data.cod === 200) {
                setWeather({
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                    temp: Math.ceil(data.main.temp / 10),
                    name: data.name,
                });
            }
            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                setWicon(rain_icon)
            }
        }catch(err){
            console.log("error ya marina",err)
        }

    }
    return <>
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className="cityInput" onChange={search} placeholder='Search' />
                <div className="search-icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">{weather.temp? weather.temp : Math.ceil(data.main.temp / 10)}°C</div>
            <div className="weather-location">{weather.name? weather.name : data.name}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{weather.humidity? weather.humidity : data.main.humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{weather.wind? weather.wind : data.wind.speed} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
