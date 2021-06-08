import React from 'react';
import axios from 'axios';
import style from '../style/Weather.module.scss';
import WeatherInfo from './WeatherInfo';
import Header from './Header';

const Weather = () => {
    const [city, setCity] = React.useState('');
    const [weather, setWeather] = React.useState('');
    const [country, setCountry] = React.useState('City');

    React.useEffect(() => {
        if (city.length > 0) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=053f17f5b38f7007597d4a07ed2860e6`)
                .then(result => {
                    console.log('success:', result.data)
                    setWeather(result.data);
                    setCountry(result.data.sys.country);
                })
                .catch(error => console.log('error:', error));
        }
    }, [city]);
    return (
        <div className={style.main}>
            <div className={style.header}>
                <Header
                    city={city}
                    setCity={setCity}
                    country={country} />
            </div>
            <div className={style.weatherInfo}>
                <WeatherInfo weather={weather} />
            </div>
        </div>
    )
}

export default Weather;


// bbc15013f006429cb70102721210706

// OpenWeatherMapOpenWeatherMap