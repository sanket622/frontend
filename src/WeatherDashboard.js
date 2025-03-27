import React, {usestate} from 'react'
import axios from axios

export const WeatherDashboard = () =>{
    const [city,setCity] = usestate(false)
    const [weatherData,setWeatherData] = usestate(null)
    const [loading,setLoading] = usestate(false)
    const [error,setError] = usestate(null)

    const fetchWeather = async()=>{
        if(!city) return alert('Enter a city name')

            setLoading(true)
            setError(null)

            try{
                const response = await axios.get()
                setWeatherData(response.data)
            }catch{
                setError('Failed to fetch data')
            }

            setLoading(false)
    }

    return (
        <div className='weather-container'>
<h1>Weather Dashboard</h1>
<input
type='text'
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder='Enter city'
/>
<button onClick={fetchWeather} disabled={loading}>
{loading ? 'Loading...' : 'Search'}
</button>
{error && <p className='error'>{error}</p>}

{
    weatherData && (
        <>
            <h2>Current Weather</h2>
            <p>Temperature:
            {weatherData.currentWeather.main.temp}
            </p>
            <p>Description:
            {weatherData.currentWeather.main.humidity}
                </p>
                <h2>
                    5-day Forecast
                </h2>
                <div className='forecast'>
                 {weatherData.forecast.map((day,index)=>{
                    <p></p>
                 })}
                </div>
        </>
    )
}
        </div>
    )
}