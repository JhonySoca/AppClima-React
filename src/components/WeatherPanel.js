import React, {useState} from "react";
import Form from "./Form";
import Card from "./Card";


const WeatherPanel=()=>{

    let urlWeather="https://api.openweathermap.org/data/2.5/weather?appid=20a3d96c7037a5e8d2dd1d5f2e4ac3fd&lang=es"
    let cityUrl="&q=";

    let urlForecast="https://api.openweathermap.org/data/2.5/forecast?appid=20a3d96c7037a5e8d2dd1d5f2e4ac3fd&lang=es"


    const[weather, setWeather]=useState([]);
    const [forecast, setForetcast]=useState([]);
    const [loading, setLoading]=useState(false);
    const[show, setShow]=useState(false);
    const[location, setLocation]=useState("");

    const getLocation=async(loc)=>{
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather=urlWeather+cityUrl+loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok)throw{response}
            return response.json();
        }).then((weatherData)=>{
            console.log(weatherData)
            setWeather(weatherData);
        }).catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //forecast

        urlForecast=urlForecast+cityUrl+loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok)throw{response}
            return response.json();
        }).then((forecastData)=>{
            console.log(forecastData)
            setForetcast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }

    return(

        <React.Fragment>
            <Form 
            newLocation={getLocation}
            />
            <Card
            showData={show}
            loadingData={loading}
            weather={weather}
            forecast={forecast}
            />


        </React.Fragment>
        
    )

}

export default WeatherPanel;