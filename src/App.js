import './index.css';
import './App.css';
import React, { useState } from 'react';
import WeatherComponent from './components/WeatherComponent';
import axios from 'axios';
import chatSVG from './images/taxidesign.svg';


 // create strings for these texts
function App() {

  const [city, setCity] = useState("null");
  const [visibility, setTextVisibility] = useState(false);

  //get data from api
  const [weatherData, getweatherData] = useState('');
  const url = 'http://api.openweathermap.org/data/2.5/forecast?appid=6a78596d062df78380eff5944c4e5567&q=' + city + ',de';

  

  const handleCityChange = ({ target }) => {
    setCity(target.value);
  };

  const handleClick = () => {
    getWeather();
  };

  const getWeather = () => {
    axios.get(`${url}`) // replace notes with city
    .then((response) => {
      setTextVisibility(false);
      const allweatherData = response.data;
      //add data to state
      getweatherData(allweatherData.list);
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        setTextVisibility(true);
        console.log(error);
      }
    });
    
// (error => console.error(`Error: ${error}`));
  }
  return (
    <div className="Container" style={{ backgroundImage : {chatSVG} }}>
        <h1 className="HeaderTextOrange" >Hello Sunshine!</h1>
        <h1 className="HeaderTextGrey" >Can you please tell me the <br /> weather in Germany?</h1>
        { !visibility 
          ? <h1 className="pleaseEnterCityText" >Please enter a city</h1>
          : null
        }

        { visibility 
          ? <h1 className="pleaseEnterCityText" >Please try another city</h1>
          : null
        }
        <input className="input" onChange={handleCityChange} />
        <button className="buttonStyle" onClick={handleClick}>Have a look</button> 
        <img src={chatSVG} className='background-img' alt="Icon chat"/>
        <WeatherComponent weatherData={weatherData}/>
        
        
    </div>
  );
}

export default App;
