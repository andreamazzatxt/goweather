import style from './Weather.module.css'
import {store} from '../store'
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from 'react';
import Icons from './Icons';
import { getForecast, getWeather, getWeatherOneCall } from '../api';
import { navigationContext } from '../navigationContext';
import Forecast from './Forecast';
function Weather(props) {
    const {city} = useContext(store)
    const {setNavigator} = useContext(navigationContext)
    const [data,setData] =useState({})
    const [mode,setMode] = useState('now')
    
    useEffect(()=>{
        async function fetch (lat,lon){
            let response = await getWeatherOneCall(lat,lon)
            setData(response)
        }
        fetch(city.lat,city.lon);
        
        console.log(data);

    },[])
    const handleClick = () =>{
        setNavigator('')
        setTimeout(()=>{
            setNavigator('main')
        },500)
    }
    
    return (
        <div className={style.screen}> 
            {   mode==='now' &&
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}
                className={style.card}>
                <i onClick={()=>{handleClick()}} id={style.button} className="far fa-times-circle"></i>

                <h1 className={style.title}>{city.city}</h1>
                {
                    <Icons desc={data.id} size={'25vw'}></Icons>
                }
               <span id={style.desc}>{data.desc && data.desc[0].toUpperCase()+data.desc.substring(1)}</span>

                <div className={style.conditions}>
                   <span id={style.temp}> Temp: {data.temp} °C | Feels like {data.feels} °C </span> 
                   <span id={style.temp}> Humidity: {data.humidity} % </span> 
                   <button id={style.buttonfor} onClick={()=>{setMode('forecast')}}>Next 7 days</button>
                </div>
                </motion.div>
            }
            {   mode ==='forecast' &&
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}
                className={style.card}>
                    <i onClick={()=>{handleClick()}} id={style.button} className="far fa-times-circle"></i>
                       <Forecast foreArr={data.forecast}/>       
                    <button id={style.buttonfor} onClick={()=>{setMode('now')}}>Current Weather</button>
  
                </motion.div>
            }
            
        </div>
    )
}

export default Weather