import '../styles/card.css';
import React from 'react';
 
export default function WeatherComponent (props) {
    // console.log(props.notes);

    const displayWeather = (props) => {
        const {weatherData} = props;

        if (weatherData.length > 0) {
            return (
                weatherData.map((weather, index) => {
                    console.log(weather);
                    return (
                        <div className='card' key={weather.dt}>
    
                            <div className='card__info'>
                                <div>
                                    <div className='card__info_dtLabel'>{weather.dt_txt.split(' ')[0]}</div>
                                </div>

                                <div className='card__info_dtend'>
                                    <div className='card__info_dtLabel'>{weather.dt_txt.split(' ')[1]}</div>
                                </div>
                            </div>

                            <div className='card__info'>
                                <div>
                                    <div className='card__temp'>{"temperature: " + weather.main.temp}</div>
                                    <div className='card__temp'>{"feels like temperature: " + weather.main.feels_like}</div>
                                </div>
                            </div>

                            <div className='tag'>
                              <div className='tag__info'>{weather.weather[0].description}</div>
                            </div>

                        
                        </div>
                    )
                })
            )
        } 
        
    }

    return (
        <>
         {displayWeather(props)} 
        </>
        
    
    )
}