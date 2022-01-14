import React from 'react'

const WeatherItem = ({address,time,temp,desc,visible,wind,humidity}) => {
    return (
        <div className="weather__content-main">
        <div className="address">
            <h2 id="address"><span>{address}</span> VN</h2>
        </div>

        <div className="time">
            <p id="time">{time}</p>
        </div>

        <div className="temperature">
            <h1><span id="temparature">{temp}</span><sup>o</sup>C</h1>
        </div>

        <div className="description">
            <h2 id="desc">{desc}</h2>
        </div>

        <div className="change">
            <div className="visibility">
                <i className="far fa-eye"></i>
                <p><span id="visible">{visible}</span> (m)</p>
            </div>

            <div className="wind">
                <i className="fas fa-wind"></i>
                <p><span id="wind">{wind}</span> (m/s)</p>
            </div>

            <div className="humidity">
                <i className="fas fa-cloud-sun"></i>
                <p><span id="humidity">{humidity}</span> (%)</p>
            </div>
        </div>
    </div>
    )
}

export default WeatherItem
