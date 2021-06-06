import React from 'react';
import style from '../style/Header.module.scss';
import CitySelector from './CitySelector';


const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    Weather for
                </div>
                <div className={style.citySelector}>
                    <CitySelector
                        city={props.city}
                        setCity={props.setCity}
                        country={props.country} />
                </div>
            </div>
        </div>

    )
}

export default Header;