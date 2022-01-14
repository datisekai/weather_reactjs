import React from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import WeatherItem from './WeatherItem';


function App() {
    const [time, setTime] = useState(new Date().toLocaleString())
    const [address, setAddress] = useState('Rach Gia')
    const [temp, setTemp] = useState(20)
    const [desc, setDesc] = useState('Clouds')
    const [visible, setVisible] = useState(10000)
    const [wind, setWind] = useState(4.04)
    const [humidity, setHumidity] = useState(21)
    const [search, setSearch] = useState('Da Lat')
    const [bg, setBg] = useState('https://i.imgur.com/hVlQO8A.gif')


    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleString())
        },1000)
    },[time])

    useEffect(() => {
        temp < 25 ? setBg('https://i.imgur.com/aJYdiiR.gif') : setBg('https://i.imgur.com/hVlQO8A.gif')
    },[temp])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8d484d5d7bcce56b92573204d8f12c49`)
        .then(res => res.json())
        .then(data => {
            setAddress(data.name)
            setTemp(Math.round(data.main.temp - 273.15))
            setDesc(data.weather[0].main)
            setVisible(data.visibility)
            setWind(data.wind.speed)
            setHumidity(data.main.humidity)
        })
    },[search])

  return (
    <div className="App">
      <div className="weather">
        <div className="weather__content" style={{backgroundImage:`url(${bg})`}}>
            <div className="weather__content-input">
                <input type="text" name="" id="txtsearch" placeholder="Enter your city name ..." onKeyPress={(e) => {
                    if(e.code === 'Enter') setSearch(e.target.value.trim())
                }}/>
            </div>

           <WeatherItem address={address} desc={desc} visible={visible} wind={wind} humidity={humidity} temp={temp} time={time}/>
        </div>
    </div>
    </div>
  );
}

export default App;
