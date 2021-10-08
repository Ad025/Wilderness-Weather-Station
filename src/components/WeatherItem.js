import React from 'react';

const WeatherItem = ({timeStamp, temp, temp_min, temp_max, wind_speed, visibility, location}) => (
    
    <li>
        ------------------------
        <p>{timeStamp}</p>
        <p>location={location}</p>
        <p>temp={temp}, min temp={temp_min}, max temp={temp_max}</p>
        <p>wind speed={wind_speed}</p>
        <p>visibility={visibility}</p>
        ------------------------
        
    </li>
    
);



export default WeatherItem;
