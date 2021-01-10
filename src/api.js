const apiKey = "eb27764339d9009a460d45afddef367c"

export async function geoCoding (city){
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);
    response = await response.json();
    let results = response.map(element =>{
        return {
            city: element.name,
            country: element.country,
            lat: element.lat,
            lon: element.lon,
        }
    })
    return results;
}

function getImgDesc(id){
    if(id >= 200 && id <= 232 ){
        return 'thunderstorm'
    }else if(id >= 300 && id <= 321){
        return 'drizzle'
    }else if(id >= 500 && id <= 531){
        return'rain'
    }else if(id >= 600 && id <= 622){
        return'snow'
    }else if(id >= 701 && id <= 781){
        return'mist'
    }else if(id === 801 || id === 802){
        return'cloudy'
    }else if(id === 803 || id === 804){
        return'overcast'
    }else if(id === 800){
        return'clear'
    }else{
        return ''
    }
}

export async function getWeatherOneCall(lat,lon){
    let response = await fetch (`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    response = await response.json()
    let forecast = response.daily.map(day =>{
        return{
            day: (new Date(day.dt*1000)),
            min: Math.round((day.temp.min -273.15)*10)/10,
            max: Math.round((day.temp.max -273.15)*10)/10,
            humidity: day.humidity,
            id: getImgDesc(day.weather[0].id),
            desc: day.weather[0].description,
        }
    })
    forecast.shift();
    let result = {
       id: getImgDesc(response.current.weather[0].id),
       desc: response.current.weather[0].description,
       temp: Math.round((response.current.temp -273.15)*10)/10,
       feels: Math.round((response.current.feels_like -273.15)*10)/10,
       humidity: response.current.humidity,
       forecast: forecast,
    }
    console.log(result);
    return result
}
