import React from 'react'
import '../App.css';

export default function Whether(props) {

    const data = props.data;

  return (
    <div className="layout">
        <div className='whether-card'>
            <div className="whether-title">
                <div className="details">
                    {data.location.name},&nbsp;
                    {data.location.region},&nbsp;
                    {data.location.country},&nbsp;
                    {data.location.tz_id}
                </div>
                <div className="time">
                    {data.location.localtime}
                </div>
            </div>
            <div className="section">
                <div className="whether-left">
                    <h1>
                        {data.current.temp_c} C
                    <br />
                        {data.current.temp_f} F
                    </h1>
                    <h3>
                        Last Updated <br /> {data.current.last_updated}
                    </h3>
                    <h2>
                        Latitude : {data.location.lat} <br />
                        Longitude : {data.location.lon}
                    </h2>
                </div>
                <div className="whether-right">
                    <img src={data.current.condition.icon} alt="whether"/>
                    <p>{data.current.condition.text}</p>
                    <p style={{textAlign:'left',paddingLeft:'3vh' , fontSize:'15px', fontWeight:'bold', fontFamily:'Segoe UI'}}>Wind Speed : <br /> {data.current.wind_kph} kph on {data.current.wind_dir} direction</p>
                    <p style={{fontSize:'20px', fontWeight:'bold', fontFamily:'Segoe UI'}}>Humidity : {data.current.humidity} %</p>
                </div>
            </div>
        </div>
    </div>
  )
}
