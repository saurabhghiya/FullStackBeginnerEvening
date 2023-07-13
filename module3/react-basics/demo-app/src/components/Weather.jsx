import React, { useState, useEffect } from 'react';

export default function Weather(props) {
    let [data, setData] = useState(null);
    let city = props.city || 'Seoul';
    useEffect(() => {
        fetchData().then((response) => {
            setData(response);
            // console.log(data);
        });
    }, []);

    const fetchData = async () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=7b58ea8e16164a7dac7160112232705&q=${city}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    return <div className='item'>{data ? 
        <>
            <img src={data.current.condition.icon} alt="icon" className='icon' />
            <p className='city'>{data.location.name}</p>
            <p className='value'>{data.current.temp_c}°C | {data.current.temp_f}°F</p>
            <p className='time'>{data.location.localtime.split(' ')[1]} · {data.location.localtime.split(' ')[0].split('-')[2]} July</p>
        </>
     : <p>Loading...</p>}</div>;
};

/* 
{data.current.condition.text} · 
*/