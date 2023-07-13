import React, { useState, useEffect } from 'react';

export default function Loading(props) {
    let [data, setData] = useState(null);
    let city = props.city || 'Seoul';
    useEffect(() => {
        fetchData().then((response) => {
            setData(response);
            // console.log(data);
        });
    }, []);

    const fetchData = async (location) => {
        const url = `https://api.weatherapi.com/v1/current.json?key=7b58ea8e16164a7dac7160112232705&q=${city}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    return <div className='item'>{data ? <p>Data Loaded!</p> : <p>Loading...</p>}</div>;
};