import React from 'react';
import style from '../style/WeatherInfo.module.scss';

const WeatherInfo = (props) => {
    let imgUrl;
    if (props.weather.length === undefined) imgUrl = "http://openweathermap.org/img/w/" + props.weather.weather[0].icon + ".png";
    return (
        <div>
            {props.weather.length === undefined ?
                <div className={style.content}>
                    <div className={style.tempWrapper}>
                        <div className={style.img}>
                            <img src={imgUrl} />
                        </div>
                        <div className={style.temp}>
                            {(props.weather.main.temp - 273.15).toFixed(2)}°С
                            <div className={style.sky}>
                                {props.weather.weather[0].main}
                            </div>
                        </div>
                    </div>
                    <div className={style.dataWrapper}>
                        <div className={style.keys}>
                            <div className={style.wind}>Wind:</div>
                            <div className={style.presure}>Presure:</div>
                            <div className={style.humidity}>Humidity:</div>
                        </div>
                        <div className={style.values}>
                            <div className={style.wind}>{props.weather.wind.speed} mph</div>
                            <div className={style.presure}>{props.weather.main.pressure} hPa</div>
                            <div className={style.humidity}>{props.weather.main.humidity} %</div>
                        </div>
                    </div>
                </div> : <div>hello</div>}
        </div>
    )
}

export default WeatherInfo;


//"http://openweathermap.org/img/w/" + weather.icon + ".png";